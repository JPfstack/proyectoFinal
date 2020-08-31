export class Producto {

    idProducto: number;
    nombre: string;
    precio: number;
    disponibilidad: string;

    constructor(pIdProducto: number, pNombre: string, pPrecio: number, pDisponibilidad: string) {



        this.idProducto = pIdProducto;
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.disponibilidad = pDisponibilidad;

    }
}