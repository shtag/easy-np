import { HttpClient } from "@angular/common/http";
import { CityListResponce } from "./responce.model";
import { PersonalInfo } from "./sender-info.model";

export class Counterparty {
  constructor(private http: HttpClient) { }
  APIkey = '4b89ac78bccd74455eb00d81c927c0de';

  baseUrl = 'https://api.novaposhta.ua/v2.0/json/';

  create(recipient: PersonalInfo) {
    return this.http.post<CityListResponce>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "Counterparty",
      "calledMethod": "save",
      "methodProperties": {
        "FirstName": recipient.FirstName,
        "MiddleName": recipient.MiddleName ? recipient.MiddleName : '',
        "LastName": recipient.LastName,
        "Phone": recipient.Phone,
        "Email": "",
        "CounterpartyType": "PrivatePerson",
        "CounterpartyProperty": "Recipient"
      }
    })
  }

  getAll() {
    return this.http.post<CityListResponce>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "Counterparty",
      "calledMethod": "getCounterparties",
      "methodProperties": {
        "CounterpartyProperty": "Sender",
        "Page": "1"
      }
    })
  }
}