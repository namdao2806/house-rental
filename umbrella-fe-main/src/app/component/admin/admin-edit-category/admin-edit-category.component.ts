import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-admin-edit-category',
  templateUrl: './admin-edit-category.component.html',
  styleUrls: ['./admin-edit-category.component.css']
})
export class AdminEditCategoryComponent implements OnInit {
  editCategoryForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
  })
  obj: any;
  constructor(private activatedRoute: ActivatedRoute,
              private categoriesService: CategoryService,
              private router: Router,
              private toast: NgToastService) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findCategoryById(id);
    })
  }


  findCategoryById(id: any) {
    this.categoriesService.findById(id).subscribe((data) => {
      console.log(data);
      this.editCategoryForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
      })
    })
  }

  save() {
    this.obj = {
      id:this.editCategoryForm.value.id,
      name: this.editCategoryForm.value.name
    }
    console.log(this.obj)
    this.categoriesService.updateCategory(this.editCategoryForm.value.id, this.obj).subscribe(() => {
      this.toast.success({detail: "Thành Công", summary: 'Sửa thành công!', duration: 3000})
      // @ts-ignore
      $('#exampleModalEditProductMyShop').modal('hide');
      this.editCategoryForm.reset()
      this.router.navigate(["admin/admin-all-category"])
    }, error => {
      this.toast.warning({detail: "Lỗi!", summary: 'Nhập sai, không thể sửa !', duration: 3000})
      console.log(error)
    })
  }
}
