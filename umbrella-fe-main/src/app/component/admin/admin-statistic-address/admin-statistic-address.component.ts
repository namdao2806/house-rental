import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {Product} from "../../../model/product";
import {CategoryService} from "../../../service/category.service";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-admin-statistic-address',
  templateUrl: './admin-statistic-address.component.html',
  styleUrls: ['./admin-statistic-address.component.css']
})
export class AdminStatisticAddressComponent implements OnInit {

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
    this.getAllProductByAddress1()
    this.getAllProductByAddress2()
    this.getAllProductByAddress3()
    this.getAllProductByAddress4()
    this.getAllProductByAddress5()
    this.getAllProductByAddress6()
    this.getAllProductByAddress7()
    this.getAllProductByAddress8()
    this.getAllProductByAddress9()
    this.getAllProductByAddress10()
    this.getAllProductByAddress11()
    this.getAllProductByAddress12()
  }
  getAllProductByAddress1() {
      this.product.searchByAll('','Cầu Giấy','','','').subscribe((data) => {
        this.products1 = data
        this.name[0] = this.products1.length
      })
    console.log(this.name)
  }
  getAllProductByAddress2() {
    this.product.searchByAll('','Hoang Mai','','','').subscribe((data) => {
      this.products2 = data
      this.name[1] = this.products2.length
    })
    console.log(this.name)
  }
  getAllProductByAddress3() {
    this.product.searchByAll('','Hoan Kiem','','','').subscribe((data) => {
      this.products3 = data
      this.name[2] = this.products3.length
    })
    console.log(this.name)
  }
  getAllProductByAddress4() {
    this.product.searchByAll('','Bac Tu Liem','','','').subscribe((data) => {
      this.products4 = data
      this.name[3] = this.products4.length
    })
    console.log(this.name)
  }
  getAllProductByAddress5() {
    this.product.searchByAll('','Hai Ba Trung','','','').subscribe((data) => {
      this.products5 = data
      this.name[4] = this.products5.length
    })
    console.log(this.name)
  }
  getAllProductByAddress6() {
    this.product.searchByAll('','Tay Ho','','','').subscribe((data) => {
      this.products6 = data
      this.name[5] = this.products6.length
    })
    console.log(this.name)
  }
  getAllProductByAddress7() {
    this.product.searchByAll('','Nam Tu Liem','','','').subscribe((data) => {
      this.products7 = data
      this.name[6] = this.products7.length
    })
    console.log(this.name)
  }
  getAllProductByAddress8() {
    this.product.searchByAll('','Ha Dong','','','').subscribe((data) => {
      this.products8 = data
      this.name[7] = this.products8.length
    })
    console.log(this.name)
  }
  getAllProductByAddress9() {
    this.product.searchByAll('','Ba Dinh','','','').subscribe((data) => {
      this.products9 = data
      this.name[8] = this.products9.length
    })
    console.log(this.name)
  }
  getAllProductByAddress10() {
    this.product.searchByAll('','Dong Da','','','').subscribe((data) => {
      this.products10 = data
      this.name[9] = this.products10.length
    })
    console.log(this.name)
  }
  getAllProductByAddress11() {
    this.product.searchByAll('','Long Bien','','','').subscribe((data) => {
      this.products11 = data
      this.name[10] = this.products11.length
    })
    console.log(this.name)
  }
  getAllProductByAddress12() {
    this.product.searchByAll('','Thanh Xuan','','','').subscribe((data) => {
      this.products12 = data
      this.name[11] = this.products12.length
    })
    console.log(this.name)
  }
}
