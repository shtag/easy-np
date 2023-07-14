import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/model/api.service';
import { Categories, Data, DataField } from 'src/app/model/interfaces/dirty-data.interface';
import { PersonInfo } from 'src/app/model/sender-info.model';

@Component({
  selector: 'app-from-table',
  templateUrl: './from-table.component.html',
  styleUrls: ['./from-table.component.scss']
})
export class FromTableComponent {
  constructor(private api: ApiService) { }

  textData = `Телефон	Фамилия	Имя	Город	Почта	Почтомат	Цена	Наложка
380959039212	Канищев	Василий	Запорожье	129		1299	
123456789012	Иванов	Алексей	Киев		65992	1000	
987654321098	Смирнова	Екатерина	Одесса	32		2500	2000
380633993454	Олейник	Александра	Запорожье	16		999	`;

  form = new FormGroup({ 'table': new FormControl('') })

  data: Data = []

  submit() {
    const data = this.form.controls.table.value?.split('\n').map(item => item.split('\t'));
    if (!data) {
      return
    }
    const category: Categories[] = data[0] as Categories[];
    const arr: Data = []
    for (let i = 1; i < data.length; i++) {
      const obj: DataField = {}
      for (let j = 0; j < category.length; j++) {
        obj[category[j]] = data[i][j]
      }
      arr.push(obj)
    }
    this.data = arr
    // this.api.getWarehouses('одеса').subscribe(item => console.log(item))
    // let city: any = '';
    // this.api.getCity().subscribe(item => console.log(item))
    // console.log(city)
    const sender: PersonInfo = {
      phone: '380633993454',
      city: "db5c88d0-391c-11dd-90d9-001a92567626",
      index: "55/1",
      address: "1692286e-e1c2-11e3-8c4a-0050568002cf",
      contact: 'String',
      ref: ''
    }
    const recipient: PersonInfo = {
      phone: '380633993454',
      city: "db5c88d0-391c-11dd-90d9-001a92567626",
      index: "55/2",
      address: "7b422fc4-e1b8-11e3-8c4a-0050568002cf",
      contact: 'bcb6b0d0-0a28-11ee-a60f-48df37b921db',
      ref: '8d96e03d-86c0-11e8-8b24-005056881c6b'

    }
    // this.api.createDocument(sender, recipient, { description: 'ss', cost: '1000' }).subscribe(item => console.log(item))
    // this.api.counterpartyCreate(
    //   {
    //     FirstName: 'Василь',
    //     LastName: 'Каніщев',
    //     Phone: '380993994758'
    //   }
    // ).subscribe(item => console.log(item))


    // this.api.counterpartyGetAdress().subscribe(item => console.log(item))
  }

  recipientCounterparty = ''

  recipientPerson = ''

  createCounterparty() {
    this.api.counterpartyCreate(
      {
        FirstName: 'Василь',
        LastName: 'Каніщев',
        Phone: '380993994758'
      }
    ).subscribe(item => this.recipientCounterparty = item.data[0].Ref)
  }

  createCounterpartyPerson() {
    this.api.counterpartyPersonCreate({
      FirstName: 'Василь',
      LastName: 'Каніщев',
      Phone: '380993994758'
    }).subscribe(item => console.log(item))
  }

  getAllCounterparty() {
    this.api.counterpartyGetAll().subscribe(item => console.log(item))
  }
}
