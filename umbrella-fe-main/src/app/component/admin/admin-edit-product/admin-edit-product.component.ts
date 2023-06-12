import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {
  editProductMyShopForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    address: new FormControl(''),
    categoryId: new FormControl(''),
    user:new FormControl('')
  })
  obj: any;
  listCategory: Category[] = []
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoriesService: CategoryService,
              private router: Router,
              private toast: NgToastService) {
  }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe((data)=> {
      console.log(data)
      this.listCategory = data
    })

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findProductByMyShopId(id);
    })
  }


  findProductByMyShopId(id: any) {
    this.productService.findById(id).subscribe((data) => {
      console.log(data);
      this.editProductMyShopForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        quantity: new FormControl(data.quantity),
        address: new FormControl(data.address),
        description: new FormControl(data.description),
        categoryId: new FormControl(data.category),
        user:new FormControl(data.user)
      })
    })
  }

  save() {
    this.obj = {
      name: this.editProductMyShopForm.value.name,
      category: {
        id: this.editProductMyShopForm.value.categoryId
      },
      address: this.editProductMyShopForm.value.address,
      price: this.editProductMyShopForm.value.price,
      quantity: this.editProductMyShopForm.value.quantity,
      description: this.editProductMyShopForm.value.description,
      user: {
        id: this.editProductMyShopForm.value.user.id
      }
    }
    console.log(this.obj)
    this.productService.updateProduct(this.editProductMyShopForm.value.id, this.obj).subscribe(() => {
      this.toast.success({detail: "Thành Công", summary: 'Accept thành công!', duration: 3000})
      // @ts-ignore
      $('#exampleModalEditProductMyShop').modal('hide');
      this.editProductMyShopForm.reset()
      this.router.navigate(["admin/admin-all-products"])
    }, error => {
      this.toast.warning({detail: "Lỗi!", summary: 'Nhập sai, không thể sửa !', duration: 3000})
      console.log(error)
    })
  }
}
