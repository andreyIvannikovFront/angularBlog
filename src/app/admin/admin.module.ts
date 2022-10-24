import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import {RouterModule, Routes} from "@angular/router";
import { CreateComponent } from './components/create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "../auth.guard";

const router: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
      {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]}
    ]
  }
];


@NgModule({
  declarations: [DashboardPageComponent, LoginPageComponent, AdminLayoutComponent, CreateComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(router),
      SharedModule
  ],
  exports: [
    DashboardPageComponent,
    LoginPageComponent,
    AdminLayoutComponent
  ],
    providers: [AuthService, AuthGuard]
})
export class AdminModule { }
