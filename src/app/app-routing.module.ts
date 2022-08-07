import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './previews/auth/auth.component';
import { MainComponent } from './previews/main/main.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { DashboardComponent } from './views/main/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'auth', 
  component: AuthComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ] 
},
{ path : 'main',
component : MainComponent,
children: [
  { path: '', component: DashboardComponent },
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
