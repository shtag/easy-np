export interface ContactPerson {
  Ref: string;
  Description: string;
  LastName: string;
  FirstName: string;
  MiddleName: string;
}

export interface Counterparty {
  Ref: string;
  Description: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Counterparty: string;
  OwnershipForm: string;
  OwnershipFormDescription: string;
  EDRPOU: string;
  CounterpartyType: string;
  ContactPerson: {
    success: boolean;
    data: ContactPerson[];
    errors: string[];
    translatedErrors: string[];
    warnings: string[];
    info: string[];
    messageCodes: string[];
    errorCodes: string[];
    warningCodes: string[];
    infoCodes: string[];
  };
}

export interface CreateCounterpartyResponse {
  success: boolean;
  data: Counterparty[];
  errors: string[];
  warnings: string[];
  info: string[];
  messageCodes: string[];
  errorCodes: string[];
  warningCodes: string[];
  infoCodes: string[];
}