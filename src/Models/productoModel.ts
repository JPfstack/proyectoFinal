export class PRODUCTO {

    idProducto: number;
    nombre: string;
    precio: number;
    disponibilidad: string;
    imagen: string;

    constructor(pIdProducto: number, pNombre: string, pPrecio: number, pDisponibilidad: string, pImagen: string) {



        this.idProducto = pIdProducto;
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.disponibilidad = pDisponibilidad;
        this.imagen = pImagen;

    }
}