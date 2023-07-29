// Handle type conflicts from deep readonly types from valtio useSnapshot
declare module 'valtio' {
  function useSnapshot<T extends object>(p: T): T;
  function snapshot<T extends object>(p: T): T;
}

export interface Icon extends Record<string, unknown> {
  id: string;
  name: string;
  description: IconDescription;
  occupation: string[];
}

export interface IconDescription {
  awards: string; // make own interface when fields are known

}

/** Companies in Sex Tech */
export interface Company extends Record<string, unknown> {
  id: string;
  label: string;
  stageId: string;
  founders: string[];
  siteURL: string;
  notes: CompanyNote[];
  labels: string[];
  annualContractValue: number;
  updatedAt?: number;
  reminder?: string;
  icon?: string;
}

export interface CompanyNote {
  id: string;
  text: string;
  updatedAt: string;
  createdByCurrentUser?: boolean;
}

export interface Stage {
  id: string;
  label: string;
}

/** Integrations */
export interface Integration {
  title: 'Slack' | 'Jira' | 'Hubspot' | 'Salesforce';
  iconURL: string;
  subtitle: string;
  enabled: boolean;
  description: string;
}

export interface User {
  name: string;
  imgURL: string;
}

export interface Notification {
  title: string;
  subtitle?: string;
}
