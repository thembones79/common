import { Subjects } from "./subjects";

export interface ExpirationCempleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
