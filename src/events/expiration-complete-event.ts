import { Subjects } from "./subjects";

export interface ExpirationCempleteevent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
