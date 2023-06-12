import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-admin-statistic-price',
  templateUrl: './admin-statistic-price.component.html',
  styleUrls: ['./admin-statistic-price.component.css']
})
export class AdminStatisticPriceComponent implements OnInit {

  products1: Product[] | any
  products2: Product[] | any
  products3: Product[] | any
  products4: Product[] | any
  products5: Product[] | any
  products6: Product[] | any
  products7: Product[] | any
  products8: Product[] | any
  products9: Product[] | any
  products10: Product[] | any
  products11: Product[] | any
  products12: Product[] | any
  name: any[] = [];

  constructor(private product :ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.getAllProductByPrice1()
    this.getAllProductByPrice2()
    this.getAllProductByPrice3()
    this.getAllProductByPrice4()
    this.getAllProductByPrice5()
  }
  getAllProductByPrice1() {
    this.product.searchByAll('','','','0','3499999').subscribe((data) => {
      this.products1 = data
      this.name[0] = this.products1.length
    })
    console.log(this.name)
  }
  getAllProductByPrice2() {
    this.product.searchByAll('','','','3500000','4999999').subscribe((data) => {
      this.products2 = data
      this.name[1] = this.products2.length
    })
    console.log(this.name)
  }
  getAllProductByPrice3() {
    this.product.searchByAll('','','','5000000','9999999').subscribe((data) => {
      this.products3 = data
      this.name[2] = this.products3.length
    })
    console.log(this.name)
  }
  getAllProductByPrice4() {
    this.product.searchByAll('','','','10000000','14999999').subscribe((data) => {
      this.products4 = data
      this.name[3] = this.products4.length
    })
    console.log(this.name)
  }
  getAllProductByPrice5() {
    this.product.searchByAll('','','','15000000','').subscribe((data) => {
      this.products5 = data
      this.name[4] = this.products5.length
    })
    console.log(this.name)
  }
}
