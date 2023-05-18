import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  isLogin = false;
  name: any;
  id: any
  products: any
  role: any

  @Input()
  searchName: FormGroup = new FormGroup({
    name: new FormControl('')
  })

  @Output()
  public searchEvent = new EventEmitter();

  constructor(private authenticationService: AuthenticationService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem("USERNAME") == null ? false : true;
    this.name = localStorage.getItem("NAME")
    this.id = localStorage.getItem("ID")
    this.role = localStorage.getItem("ROLE")
    this.findProductByUserId(this.id)
  }

  findProductByUserId(id: any) {
    this.productService.findProductByUserId(id).subscribe((data) => {
      this.products = data;
    })
  }

  logOut() {
    this.authenticationService.logout();
    this.isLogin = false;
  }

  search() {
    this.searchEvent.emit(this.searchName.value.name)
  }
  goHome(){
    window.location.href="/admin"
  }
}
