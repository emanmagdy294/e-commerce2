import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AuthGGuard } from './auth-g.guard';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
const routes: Routes = [
  { path: '' , component:StartComponent},
  { path: 'home', canActivate: [AuthGGuard]  ,component: HomeComponent },
  { path: 'about', canActivate: [AuthGGuard] ,component: AboutComponent },
  { path: 'Register' , component: RegisterComponent },
  { path: 'login' , component:LoginComponent},
  { path: 'cart',canActivate: [AuthGGuard] , component: CartComponent },
  { path: 'allproducts', canActivate: [AuthGGuard], component: AllproductsComponent },
  { path: 'favorite', canActivate: [AuthGGuard], component: FavoriteComponent },
  { path: 'productdetails/:id', canActivate: [AuthGGuard],component: ProductdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
