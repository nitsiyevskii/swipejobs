export interface JobTitle {
  imageUrl: string;
  name: string;
}

export interface Address {
  formattedAddress: string;
}

export interface ReportTo {
  name: string;
  phone: string;
}

export interface Company {
  name: string;
  address: Address;
  reportTo: ReportTo;
}

export interface Shift {
  startDate: string;
  endDate: string;
}

export interface Job {
  branch: string;
  branchPhoneNumber: string;
  company: Company;
  jobId: string;
  jobTitle: JobTitle;
  milesToTravel: number;
  requirements?: string[];
  shifts: Shift[];
  wagePerHourInCents: number;
}
