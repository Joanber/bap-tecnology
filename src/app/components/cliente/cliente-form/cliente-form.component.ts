import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  public cliente:Cliente={
    identificacion:'',
    primer_nombre:'',
    segundo_nombre :'',
    primer_apellido:'',
    segundo_apellido:'',
    fecha_nacimiento:'',
    correo:'',
    telefono:'',
    direccion:'',
    username:'',
    password:''
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cancelar(){
    this.router.navigate([''])

  }

}
