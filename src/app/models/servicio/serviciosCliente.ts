import { Servicio } from './servicio';
import { Cliente } from '../cliente/cliente';
import { Seguimiento } from '../cliente/seguimiento';

export interface ServiciosCliente{
    id?:number
    porcentaje_total?:number
    observaciones?:string
    estado?:string
    servicio?:Servicio
    cliente?:Cliente
    seguimientos?:Seguimiento
}