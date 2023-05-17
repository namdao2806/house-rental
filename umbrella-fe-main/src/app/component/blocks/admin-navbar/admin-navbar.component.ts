import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isLogin = true;
  username: any;
  id: any
  categories: Category[] = [];
  products: Product[]=[];
  users: User[]=[];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories=data;
    })
  }
  searchCategory(id: any) {
    this.productService.findProductByCategories(id).subscribe(data => {
      // @ts-ignore
      this.products = data;
    });
  }

  goHome() {
    window.location.href = '/admin';
  }
}
