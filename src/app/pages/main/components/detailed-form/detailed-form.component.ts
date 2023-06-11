import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/model/api.service';
import { PackageInfo } from 'src/app/model/sender-info.model';
import { PersonInfo } from 'src/app/model/sender-info.model';

@Component({
  selector: 'app-detailed-form',
  templateUrl: './detailed-form.component.html',
  styleUrls: ['./detailed-form.component.scss']
})
export class DetailedFormComponent {
  constructor(private api: ApiService) { }


  isAfterPayment = false

  form = new FormGroup({
    phone: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    city: new FormControl(''),
    postNumber: new FormControl(''),
    price: new FormControl(''),
    isAfterPayment: new FormControl(this.isAfterPayment),
    priceToPay: new FormControl(''),
  })

  logger() {
    console.log(this.form.value)
    console.log(`asd
    asda
    asd`.split('/n'))
    this.api.getWarehouses('одеса').subscribe(el => {
      const post = el.data.find(item => item.Number === '39')
      console.log({
        city: post?.CityRef,
        index: post?.WarehouseIndex,
        address: post?.ShortAddress
      })
    })
    const sender: PersonInfo = {
      phone: '+380959039212',
      city: '',
      index: 'string',
      address: 'string',
      contact: 'string',
    }
    const info: PackageInfo = {
      description: 'shothe',
      cost: '1000'
    }
  }
}
