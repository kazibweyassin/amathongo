export type ContactStatus =
  | "idle"
  | "invalid"
  | "sent"
  | "not_delivered"
  | "failed";

export type ContactState = {
  status: ContactStatus;
  message: string;
  fieldErrors: Record<string, string>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
