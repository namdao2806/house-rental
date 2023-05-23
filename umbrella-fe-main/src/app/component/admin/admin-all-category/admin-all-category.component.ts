import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-admin-all-category',
  templateUrl: './admin-all-category.component.html',
  styleUrls: ['./admin-all-category.component.css']
})
export class AdminAllCategoryComponent implements OnInit {

  categories: Category[] | any


  constructor(private category :CategoryService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.category.getAll().subscribe((data) => {
      this.categories = data
      console.log(this.categories)
    })
  }
}
