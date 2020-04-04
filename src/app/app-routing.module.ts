import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeRouteComponent } from './components/home-route/home-route.component';
import { ProductoComponent } from './components/producto-bap/producto/producto/producto.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


const routes: Routes = [
  {
    path: 'login', component:LoginComponent
  },
  {
    path:'registrarse',component:RegistrarseComponent
  },
  {
    path :'',component:HomeRouteComponent,
      children: [
      {
        path: 'producto',component:ProductoComponent
      },
    
    ]
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
