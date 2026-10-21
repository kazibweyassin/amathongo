"use server";

import { enquiryTopics } from "@/lib/site";
import { initialContactState, type ContactState } from "@/lib/contact-types";

type Enquiry = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
};

function clean(value: FormDataEntryValue | null, max: number): string {
  const raw = typeof value === "string" ? value : "";
  return raw
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function validate(formData: FormData): {
  errors: Record<string, string>;
  enquiry: Enquiry | null;
  trap: boolean;
} {
  const errors: Record<string, string> = {};
  const trap = clean(formData.get("company_website"), 200).length > 0;

  const name = clean(formData.get("name"), 80);
  const phone = clean(formData.get("phone"), 24);
  const email = clean(formData.get("email"), 120);
  const topic = clean(formData.get("topic"), 80);
  const message = clean(formData.get("message"), 2000);
  const consent = formData.get("consent") === "yes";

  if (!/^[\p{L}\p{M}][\p{L}\p{M}'’.\- ]{1,79}$/u.test(name)) {
    errors.name = "Enter the name you would like House of Amathongo to use.";
  }
  if (phone && !/^[+0-9][0-9\s()-]{6,22}$/.test(phone)) {
    errors.phone = "Enter a phone number House of Amathongo can call, or leave this blank.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter an email address for the reply.";
  }
  if (!enquiryTopics.includes(topic as (typeof enquiryTopics)[number])) {
    errors.topic = "Choose the concern that is closest to yours.";
  }
  if (message.length < 20) {
    errors.message = "Write at least a few sentences about the concern. Do not include passwords or banking details.";
  }
  if (!consent) {
    errors.consent = "Please confirm that you would like House of Amathongo to contact you.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, enquiry: null, trap };
  }

  return {
    errors,
    trap,
    enquiry: { name, phone, email, topic, message },
  };
}

function enquiryText(enquiry: Enquiry): string {
  return [
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone || "Not provided"}`,
    `Email: ${enquiry.email}`,
    `Topic: ${enquiry.topic}`,
    "",
    enquiry.message,
  ].join("\n");
}

async function deliver(enquiry: Enquiry): Promise<"sent" | "not_delivered" | "failed"> {
  const to = process.env.CONTACT_TO_EMAIL?.trim() ?? "";
  const webhook = process.env.CONTACT_WEBHOOK_URL?.trim() ?? "";
  const resendKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const from = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";
  const payload = {
    name: enquiry.name,
    phone: enquiry.phone,
    email: enquiry.email,
    topic: enquiry.topic,
    message: enquiry.message,
    source: "amathongo-website",
  };

  if (webhook) {
    let endpoint: URL;
    try {
      endpoint = new URL(webhook);
    } catch {
      return "failed";
    }
    if (endpoint.protocol !== "https:") return "failed";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    return response.ok ? "sent" : "failed";
  }

  if (resendKey && from && to && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `Healing enquiry: ${enquiry.topic}`,
        text: enquiryText(enquiry),
      }),
    });
    return response.ok ? "sent" : "failed";
  }

  return "not_delivered";
}

export async function submitConsultation(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const { errors, enquiry, trap } = validate(formData);

  if (Object.keys(errors).length > 0 || !enquiry) {
    return {
      status: "invalid",
      message: "Please correct the highlighted fields and send the form again.",
      fieldErrors: errors,
    };
  }

  if (trap) {
    return {
      status: "sent",
      message: "Thank you. Your enquiry has been received.",
      fieldErrors: {},
    };
  }

  try {
    const result = await deliver(enquiry);
    if (result === "sent") {
      return {
        status: "sent",
        message:
          "Thank you. Your enquiry has been sent. If the matter is urgent, you can also use WhatsApp or the phone number once they are listed on this page.",
        fieldErrors: {},
      };
    }
    if (result === "not_delivered") {
      return {
        status: "not_delivered",
        message:
          "Thank you for writing. Email delivery is not connected on this website yet, so this message was not sent. Please use WhatsApp or phone once those details are confirmed, or try again after the form is connected.",
        fieldErrors: {},
      };
    }
    return {
      status: "failed",
      message:
        "The message could not be sent just now. Please try again, or reach House of Amathongo on WhatsApp or by phone.",
      fieldErrors: {},
    };
  } catch {
    return {
      status: "failed",
      message:
        "The message could not be sent just now. Please try again, or reach House of Amathongo on WhatsApp or by phone.",
      fieldErrors: {},
    };
  }
}

export async function contactFormAction(
  formData: FormData,
): Promise<ContactState> {
  return submitConsultation(initialContactState, formData);
}
