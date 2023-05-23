import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/pages/home/home.component";
import {LoginComponent} from "./component/pages/login/login.component";
import {RegisterComponent} from "./component/pages/register/register.component";
import {DetailProductComponent} from "./component/product/detail-product/detail-product.component";
import {EditComponent} from "./component/product/edit/edit.component";
import {ProductByCategoryComponent} from "./component/product/product-by-category/product-by-category.component";
import {CreateProductComponent} from "./component/my-shop/create-product/create-product.component";
import {ListProductComponent} from "./component/my-shop/list-product/list-product.component";
import {EditProductComponent} from "./component/my-shop/edit-product/edit-product.component";
import {AllProductComponent} from "./component/product/all-product/all-product/all-product.component";
import {ShopCartComponent} from "./component/shop-cart/shop-cart.component";
import {CustomerComponent} from "./component/user/customer/customer.component";
import {CustomerShopComponent} from "./component/user/customer-shop/customer-shop.component";
import {ListCartComponent} from "./component/customer-shopping-cart/listcart/listcart.component";
import {ListBillComponent} from "./component/user/list-bill/list-bill.component";
import {DetailBillComponent} from "./component/user/detail-bill/detail-bill.component";
import {
  DetailShoppingCartComponent
} from "./component/customer-shopping-cart/detail-shopping-cart/detail-shopping-cart.component";
import {AdminComponent} from "./component/admin/admin/admin.component";
import {AdminAllProductComponent} from "./component/admin/admin-all-product/admin-all-product.component";
import {ListUserComponent} from "./component/admin/list-user/list-user.component";
import {AdminEditUserComponent} from "./component/admin/admin-edit-user/admin-edit-user.component";
import {AdminEditProductComponent} from "./component/admin/admin-edit-product/admin-edit-product.component";
import {UserDetailsComponent} from "./component/user/user-details/user-details.component";
import {AdminAllCategoryComponent} from "./component/admin/admin-all-category/admin-all-category.component";
import {AdminEditCategoryComponent} from "./component/admin/admin-edit-category/admin-edit-category.component";
import {AdminCreateCategoryComponent} from "./component/admin/admin-create-category/admin-create-category.component";

const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
},
  {
    path:"admin",
    component: AdminComponent,
  },
  {
    path:"admin/admin-all-products",
    component: AdminAllProductComponent,
  },
  {
    path:"admin/list-users",
    component: ListUserComponent,
  },
  {
    path:"admin/admin-all-category",
    component: AdminAllCategoryComponent,
  },
  {
    path:"admin/admin-edit-category/:id",
    component: AdminEditCategoryComponent,
  },
  {
    path:'product-detail/:id',
    component:DetailProductComponent
  },
  {
    path:'admin/admin-edit-user/:id',
    component:AdminEditUserComponent
  },
  {
    path:'admin/admin-edit-product/:id',
    component:AdminEditProductComponent
  },
  {
    path:'admin/admin-create-category',
    component:AdminCreateCategoryComponent
  },
  {
    path:'shop-cart',
    component:ShopCartComponent
  },
  {
    path:'my-shop/:id',
    component:ListProductComponent
  },
  {
    path:'user-details/:id',
    component:UserDetailsComponent
  },
  {
    path:'products-by-categories/:id',
    component:ProductByCategoryComponent
  },
  {
    path:'edit-product-my-shop/:id',
    component:EditProductComponent
  },
  {
    path:'edit-product/:id',
    component:EditComponent
  },{
    path:'create-product',
    component:CreateProductComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "all-products",
    component:AllProductComponent
  },
  {
    path: "all-customers",
    component: CustomerComponent
  },
  {
    path: "customer-shop/:id",
    component: CustomerShopComponent
  },
  {
    path: "my-bills",
    component: ListCartComponent
  },
  {
    path: "shop-bills",
    component: ListBillComponent
  },
  {
    path: "bill-detail",
    component: DetailBillComponent
  },
  {
    path: "detail-bill-of-customer",
    component: DetailShoppingCartComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
