import { Categoria } from './categoria';

export interface Producto {
    id?:number
    nombre?:string;
    descripcion?:string; 
    precio?:number;
    descuento?:number;
    ver_descuento:number;
    ver_en_web?:string;
    categoria?:Categoria
}