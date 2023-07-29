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
  industry: string[];
}

/** Companies in Sex Tech */
export interface Company extends Record<string, unknown> {
  id: string;
  name: string;
  label: string;
  stageId: string;
  founders: string[] | Icon[];
  siteURL: string;
  notes: CompanyNote[];
  labels: string[];
  annualContractValue: number;
  updatedAt?: number;
  stockAbbr?: string;
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


export interface Vocab {
  word: string;
  definition: string;
  slangTerm: boolean;
  synomyns?: string[]; 
}

/** Should Integrate Youtube and Sex Educators */
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
