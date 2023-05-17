import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {AuthenticationService} from "../../../service/authentication.service";
import {NgToastService} from "ng-angular-popup";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.pattern("^[^%,*]*$")]),
    password: new FormControl("", Validators.required),
  })

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService,
              private toast: NgToastService) {
  }

  ngOnInit(): void {
  }

  login() {
    // @ts-ignore
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).pipe(first()).subscribe(data => {
      localStorage.setItem('ACCESS_TOKEN', data.accessToken);
      localStorage.setItem('ROLE', data.roles[0].authority);
      localStorage.setItem('USERNAME', data.username);
      localStorage.setItem('NAME', data.name);
      localStorage.setItem('ID', data.id);
      console.log(data)
      if (data.roles[0].authority == "ROLE_USER") {
        this.toast.success({detail: "Thành Công", summary: 'Đăng nhập thành công!', duration: 3000})
        // this.router.navigate(['/']);
        window.location.href = "/"
      }
      if (data.roles[0].authority == "ROLE_ADMIN") {
        this.toast.success({detail: "Thành Công", summary: 'Đăng nhập thành công!', duration: 3000})

        this.router.navigate(['/admin']);
      }
    }, error => {
      console.log(error);
      this.toast.error({detail: "Lỗi", summary: 'Sai tài khoản hoặc mật khẩu!', duration: 3000})
      this.loginForm.reset()
      this.router.navigate(['/login']);
    })
  }
  goHome() {
    window.location.href = '/';
  }
}
