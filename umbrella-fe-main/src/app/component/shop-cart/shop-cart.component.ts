import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ShoppingCartService} from "../../service/shopping-cart.service";
import {CartItem} from "../../model/CartItem";
import {ImageService} from "../../service/image.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
