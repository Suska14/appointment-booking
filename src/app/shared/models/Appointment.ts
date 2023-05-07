import { GovernmentOffice } from "./GovernmentOffice";


export interface Appointment {
    id?: string;
    date: number;
    office: GovernmentOffice;
    userId: string | null;
  }
  