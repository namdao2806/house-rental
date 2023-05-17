import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {AuthenticationService} from "../../../service/authentication.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.pattern("[03|05|07|08|09]+[0-9]{8}")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    username: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
  })

  get name() {
    return this.registerForm.get("name")
  }

  get username() {
    return this.registerForm.get("username")
  }

  get password() {
    return this.registerForm.get("password")
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword")
  }

  get phone() {
    return this.registerForm.get("phone")
  }
  get email() {
    return this.registerForm.get("email")
  }
  get address() {
    return this.registerForm.get("address")
  }

  constructor(private authenticationService: AuthenticationService, private router: Router, private toast: NgToastService
  ) {
  }

  ngOnInit(): void {
  }

  register() {
    const user = this.setNewUser();
    this.authenticationService.register(user).pipe(first()).subscribe(data => {
      this.toast.success({detail: "Thành Công", summary: 'Đăng ký thành công!', duration: 3000})
      console.log(data)
      this.router.navigate(["/login"])
    }, error => {
      this.toast.error({detail: "Thất Bại", summary: 'Nhập Sai Tài Khoản Hoặc Mật Khẩu', duration: 3000})
      if (error.error == "Tên người dùng đã tồn tại") {
        // @ts-ignore
        document.getElementById("check-username").style.display = "block"
      }
      if (error.error == "Email đã tồn tại") {
        // @ts-ignore
        document.getElementById("check-email").style.display = "block"
      }
      console.log(error)
    })
  }

  checkConfirmPassword() {
    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      // @ts-ignore
      document.getElementById("confirm").style.display = "block";
    }
  }

  private setNewUser() {
    // @ts-ignore
    const user: User = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      address: this.registerForm.value.address,
      name: this.registerForm.value.name,
    };
    return user;
  }
  goHome() {
    window.location.href = '/';
  }
}
