import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {NgToastService} from "ng-angular-popup";
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  editProfileForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  })
  obj: any;
  constructor(private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private router: Router,
              private toast: NgToastService) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findUserById(id);
    })
  }


  findUserById(id: any) {
    this.authenticationService.findUserById(id).subscribe((data) => {
      console.log(data);
      this.editProfileForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        email: new FormControl(data.email),
        phone: new FormControl(data.phone),
        address: new FormControl(data.address),
      })
    })
  }

  save() {
    this.obj = {
      id:this.editProfileForm.value.id,
      name: this.editProfileForm.value.name,
      email: this.editProfileForm.value.email,
      phone: this.editProfileForm.value.phone,
      address: this.editProfileForm.value.address
    }
    console.log(this.obj)
    this.authenticationService.updateUser(this.editProfileForm.value.id, this.obj).subscribe(() => {
      this.toast.success({detail: "Thành Công", summary: 'Sửa thành công!', duration: 3000})
      // @ts-ignore
      // $('#exampleModalEditMyProfile').modal('hide');
      this.editProfileForm.reset()
      this.router.navigate(["/user-details",this.obj.id])
    }, error => {
      this.toast.warning({detail: "Lỗi!", summary: 'Nhập sai, không thể sửa !', duration: 3000})
      console.log(error)
    })
  }
}
