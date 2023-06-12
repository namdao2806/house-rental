import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-admin-statistic-cate',
  templateUrl: './admin-statistic-cate.component.html',
  styleUrls: ['./admin-statistic-cate.component.css']
})
export class AdminStatisticCateComponent implements OnInit {

  categories: Category[] | any
  products1: Product[] | any
  name: any[] = [];

  constructor(private category :CategoryService,
              private product :ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.category.getAll().subscribe((data) => {
      this.categories = data
      console.log(this.categories)
      this.getAllProductByCate()
    })
  }
  getAllProductByCate() {
    for (let i=1;i<=this.categories.length;i++){
      this.product.findProductByCategories(i).subscribe((data) => {
        this.products1 = data
        this.name[i-1] = this.products1.length
      })
    }
    console.log(this.name)
  }
}

