import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeRouteComponent } from './home-route/home-route.component';


const routes: Routes = [
  {
    path: 'login', component:LoginComponent
  },

  {
    path :'',component:HomeRouteComponent
  },
  {
    path:'**', pathMatch:'full',redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
