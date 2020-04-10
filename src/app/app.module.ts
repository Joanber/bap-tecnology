import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeRouteComponent } from './components/home-route/home-route.component';
import { ProductoComponent } from './components/producto-bap/producto/producto/producto.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { VerProductoComponent } from './components/producto-bap/producto/ver-producto/ver-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HomeRouteComponent,
    ProductoComponent,
    ClienteFormComponent,
    VerProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
