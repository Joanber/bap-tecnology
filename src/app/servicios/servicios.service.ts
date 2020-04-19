import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
   url:string="http://127.0.0.1:8000/api/"
  constructor(private http:HttpClient) { }

  public getServicios(){
    return this.http.get<Servicio[]>(this.url+"servicios/")
  }
}
