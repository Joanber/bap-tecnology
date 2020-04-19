import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Servicio } from 'src/app/models/servicio/servicio';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  public servicios:Servicio[]
  public loading:boolean
  constructor(private ServiciosService:ServiciosService) { 
    this.loading=true;
  }

  ngOnInit() {
    this.getServicios()
  }
  getServicios(){
    this.ServiciosService.getServicios().subscribe(
      data => {
        this.servicios=data;

        console.log('Servicios',this.servicios[1].fotos_servicio[0].foto);
        if(this.servicios===null){
          console.log('Error en el servidor')
        }else{
          this.loading=false
        }
      }
    )

  }
  




  

}
