import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password = '';
  esValido = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){
    
  }
 
  cerrarError() {
    this.esValido = true;
  }
  irRegistrarse(){
    this.router.navigate(['registrarse'])
  }

}
