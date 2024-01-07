import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CategoryComponent } from './category/category.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [

  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'login', component: LoginComponent, data: { title: 'Giriş Yap' } },
  { path: 'signup', component: SignupComponent, data: { title: 'Üye ol' } },
  { path: 'password', component: ForgotPasswordComponent, data: { title: 'Şifremi Unuttum' } },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent, data: { title: 'Dashboard-Menü' } },
      { path: 'orders', component: OrdersComponent, data: { title: 'Dashboard-Siparişler' } },
      { path: 'category', component: CategoryComponent, data: { title: 'Dashboard-Kategoriler' } }
    ],
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
