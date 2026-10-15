import {
  emailDisplay,
  emailHref,
  hasEmail,
  hasHours,
  hasPhone,
  hasWhatsApp,
  hoursDisplay,
  locationDisplay,
  mapsEmbedUrl,
  mapsLink,
  phoneDisplay,
  phoneHref,
  whatsappDisplay,
  whatsappHref,
} from "@/lib/site";

export function LocationPanel() {
  const map = mapsEmbedUrl();

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <dl className="space-y-4 text-bark">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">Phone</dt>
          <dd className="mt-1">
            {hasPhone() ? (
              <a href={phoneHref()} className="link" data-track="phone_click">
                {phoneDisplay()}
              </a>
            ) : (
              phoneDisplay()
            )}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">WhatsApp</dt>
          <dd className="mt-1">
            {hasWhatsApp() ? (
              <a
                href={whatsappHref()}
                className="link"
                data-track="whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
              >
                {whatsappDisplay()}
              </a>
            ) : (
              whatsappDisplay()
            )}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">Email</dt>
          <dd className="mt-1">
            {hasEmail() ? <a href={emailHref()} className="link">{emailDisplay()}</a> : emailDisplay()}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">Location</dt>
          <dd className="mt-1">
            <a href={mapsLink()} className="link" target="_blank" rel="noopener noreferrer">
              {locationDisplay()}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">Opening hours</dt>
          <dd className="mt-1">{hasHours() ? hoursDisplay() : hoursDisplay()}</dd>
        </div>
      </dl>
      {map ? (
        <iframe
          title="Map of the confirmed House of Amathongo location"
          src={map}
          className="h-72 w-full border border-line"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          role="img"
          aria-label="Map placeholder. A confirmed location has not been added yet."
          className="flex h-72 items-center justify-center border border-dashed border-line bg-sand px-6 text-center"
        >
          <p className="max-w-sm leading-relaxed text-bark">
            A map will be placed here when House of Amathongo confirms the meeting location. Until then, do not
            travel to an address you have only guessed.
          </p>
        </div>
      )}
    </div>
  );
}
