import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from "./component/admin/admin/admin.component";
import {HomeComponent} from "./component/pages/home/home.component";
import {RegisterComponent} from "./component/pages/register/register.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {FooterComponent} from "./component/blocks/footer/footer.component";
import {NavbarComponent} from "./component/blocks/navbar/navbar.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./helper/jwt-interceptor";
import {ErrorInterceptor} from "./helper/error-interceptor";
import {HeaderComponent} from "./component/blocks/header/header.component";
import {DetailProductComponent} from "./component/product/detail-product/detail-product.component";
import {EditComponent} from "./component/product/edit/edit.component";
import {ListCategoryComponent} from "./component/category/list-category/list-category.component";
import {NgxPaginationModule} from "ngx-pagination";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {ProductByCategoryComponent} from "./component/product/product-by-category/product-by-category.component";
import {DeleteComponent} from './component/product/delete/delete.component';
import {ListProductComponent} from './component/my-shop/list-product/list-product.component';
import {EditProductComponent} from './component/my-shop/edit-product/edit-product.component';

import {CreateCommentComponent} from './component/comment/create-comment/create-comment.component';
import {ListCommentComponent} from './component/comment/list-comment/list-comment.component';
import {CreateProductComponent} from "./component/my-shop/create-product/create-product.component";
import {AllProductComponent} from './component/product/all-product/all-product/all-product.component';
import {NgToastModule} from "ng-angular-popup";
import {ShopCartComponent} from './component/shop-cart/shop-cart.component';

import {ImageComponent} from './component/blocks/image/image.component';
import {ListComponent} from "./component/product/list/list.component";
import { CustomerComponent } from './component/user/customer/customer.component';
import { CustomerShopComponent } from './component/user/customer-shop/customer-shop.component';
import { NewProductComponent } from './component/product/new-product/new-product.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import {ListCartComponent} from "./component/customer-shopping-cart/listcart/listcart.component";
import { ListBillComponent } from './component/user/list-bill/list-bill.component';
import {DetailBillComponent} from "./component/user/detail-bill/detail-bill.component";
import { DetailShoppingCartComponent } from './component/customer-shopping-cart/detail-shopping-cart/detail-shopping-cart.component';
import { AdminNavbarComponent } from './component/admin/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { AdminAllProductComponent } from './component/admin/admin-all-product/admin-all-product.component';
import { ListUserComponent } from './component/admin/list-user/list-user.component';
import { AdminEditUserComponent } from './component/admin/admin-edit-user/admin-edit-user.component';
import { AdminEditProductComponent } from './component/admin/admin-edit-product/admin-edit-product.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { AdminAllCategoryComponent } from './component/admin/admin-all-category/admin-all-category.component';
import { AdminEditCategoryComponent } from './component/admin/admin-edit-category/admin-edit-category.component';
import { AdminCreateCategoryComponent } from './component/admin/admin-create-category/admin-create-category.component';
import { AdminStatisticCateComponent } from './component/admin/admin-statistic-cate/admin-statistic-cate.component';
import { AdminStatisticAddressComponent } from './component/admin/admin-statistic-address/admin-statistic-address.component';
import { AdminStatisticPriceComponent } from './component/admin/admin-statistic-price/admin-statistic-price.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    DetailProductComponent,
    EditComponent,
    ListCategoryComponent,
    ProductByCategoryComponent,
    DeleteComponent,
    ListProductComponent,
    EditProductComponent,
    CreateProductComponent,
    CreateCommentComponent,
    ListCommentComponent,
    AllProductComponent,
    ImageComponent,
    ListComponent,
    ShopCartComponent,
    CustomerComponent,
    CustomerShopComponent,
    NewProductComponent,
    ListCartComponent,
    ListBillComponent,
    DetailBillComponent,
    DetailShoppingCartComponent,
    AdminNavbarComponent,
    AdminHeaderComponent,
    AdminAllProductComponent,
    ListUserComponent,
    AdminEditUserComponent,
    AdminEditProductComponent,
    UserDetailsComponent,
    AdminAllCategoryComponent,
    AdminEditCategoryComponent,
    AdminCreateCategoryComponent,
    AdminStatisticCateComponent,
    AdminStatisticAddressComponent,
    AdminStatisticPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    FormsModule,
    NgToastModule,
    IvyCarouselModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor, multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
