import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityListResponce, WarehouseListResponce } from './responce.model';
import { PackageInfo, PersonInfo } from './sender-info.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://api.novaposhta.ua/v2.0/json/';

  APIkey = '4b89ac78bccd74455eb00d81c927c0de';

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
        "SenderWarehouseIndex": "55/39",
        "RecipientWarehouseIndex": "101/102",
        "PayerType": "Recipient",
        "PaymentMethod": "NonCash",
        "DateTime": this.today,
        "CargoType": "Cargo",
        "VolumeGeneral": "0.45",
        "Weight": "0.5",
        "ServiceType": "WarehouseWarehouse",
        "SeatsAmount": "1",
        "Description": packageInfo.description,
        "Cost": packageInfo.cost,
        "CitySender": sender.city,
        "Sender": "00000000-0000-0000-0000-000000000000",
        "SenderAddress": sender.address,
        "ContactSender": sender.contact,
        "SendersPhone": sender.phone,
        "CityRecipient": recipient.city,
        "Recipient": "00000000-0000-0000-0000-000000000000",
        "RecipientAddress": recipient.address,
        "ContactRecipient": recipient.contact,
        "RecipientsPhone": recipient.phone
      }
    })
  }
}
