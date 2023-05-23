import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ImageService} from "../../../service/image.service";
import {CategoryService} from "../../../service/category.service";
import {NgToastService} from "ng-angular-popup";
import {Category} from "../../../model/category";
import {finalize} from "rxjs";

@Component({
  selector: 'app-admin-create-category',
  templateUrl: './admin-create-category.component.html',
  styleUrls: ['./admin-create-category.component.css']
})
export class AdminCreateCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
  })

  get name() {
    return this.categoryForm.get('name');
  }

  constructor(private router: Router,
              private storage: AngularFireStorage,
              private categoryService: CategoryService,
              private toast: NgToastService) {
  }

  category: any;

  ngOnInit(): void {

  }


  add() {
    this.category = {
      name: this.categoryForm.value.name,

    }
    console.log(this.category)
    this.categoryService.save(this.category).subscribe((category) => {
      this.categoryForm.reset()
      this.toast.success({detail: "Thành Công", summary: 'Thêm thành công!', duration: 3000})
      // @ts-ignore
      $('#exampleModalCreateCategory').modal('hide');
      this.router.navigate(["/admin/admin-all-category"]);
    }, error => {
      this.toast.warning({detail: "Lỗi", summary: 'Không thêm được danh mục!', duration: 3000})
      console.log(error)
    })
  }

}
