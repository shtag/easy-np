import { API_KEY } from '../assets/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityListResponce, WarehouseListResponce } from './responce.model';
import { PackageInfo, PersonInfo, PersonalInfo } from './sender-info.model';
import { Counterparty } from './counterparty.class';
import { CounterpartyService } from './counterparty.service';
import { CreateCounterpartyResponse } from './interfaces/counterparty/create-counterparty.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://api.novaposhta.ua/v2.0/json/';

  APIkey = API_KEY;

  today: string;

  constructor(private http: HttpClient) {
    this.today = new Date(Date.now()).toISOString().split('T')[0].split('-').reverse().join('.');
  }

  getCity(): Observable<CityListResponce> {
    return this.http.post<CityListResponce>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "Address",
      "calledMethod": "getCities",
      "methodProperties": {
      }
    })
  }

  counterpartyCreate(recipient: PersonalInfo) {
    return this.http.post<CreateCounterpartyResponse>(this.baseUrl, {
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

  counterpartyPersonCreate(recipient: PersonalInfo) {
    return this.http.post<any>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "ContactPerson",
      "calledMethod": "save",
      "methodProperties": {
        "CounterpartyRef": "7b422fc4-e1b8-11e3-8c4a-0050568002cf",
        "FirstName": recipient.FirstName,
        "MiddleName": recipient.MiddleName ? recipient.MiddleName : '',
        "LastName": recipient.LastName,
        "Phone": recipient.Phone,
      }
    })
  }

  counterpartyGetAll() {
    return this.http.post<any>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "Counterparty",
      "calledMethod": "getCounterparties",
      "methodProperties": {
        "CounterpartyProperty": "Sender"
      }
    })
  }

  counterpartyGetAdress() {
    return this.http.post<any>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "Counterparty",
      "calledMethod": "getCounterpartyAddresses",
      "methodProperties": {
        "Ref": "8d96e03d-86c0-11e8-8b24-005056881c6b",
        "CounterpartyProperty": "Sender"
      }
    })

  }



  getAdress() {
    return this.http.post<CityListResponce>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "Counterparty",
      "calledMethod": "getCounterpartyAddresses",
      "methodProperties": {
        "Ref": "00000000-0000-0000-0000-000000000000",
        "CounterpartyProperty": "Sender"
      }
    })
  }

  getWarehouses(city: string): Observable<WarehouseListResponce> {
    return this.http.post<WarehouseListResponce>(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "Address",
      "calledMethod": "getWarehouses",
      "methodProperties": {
        "CityName": city,
      }
    })
  }

  createDocument(sender: PersonInfo, recipient: PersonInfo, packageInfo: PackageInfo) {
    return this.http.post(this.baseUrl, {
      "apiKey": this.APIkey,
      "modelName": "InternetDocument",
      "calledMethod": "save",
      "methodProperties": {
        "PayerType": "Recipient",
        "PaymentMethod": "NonCash",
        "DateTime": this.today,
        "CargoType": "Parcel",
        "Weight": "0.5",
        "ServiceType": "WarehouseWarehouse",
        "SeatsAmount": "1",
        "Description": packageInfo.description,
        "Cost": packageInfo.cost,
        "CitySender": sender.city,
        "Sender": sender.ref,
        "SenderAddress": sender.address,
        "ContactSender": sender.contact,
        "SendersPhone": sender.phone,
        "CityRecipient": recipient.city,
        "Recipient": recipient.ref,
        "RecipientAddress": recipient.address,
        "ContactRecipient": recipient.contact,
        "RecipientsPhone": recipient.phone
      }
    })
  }
}
