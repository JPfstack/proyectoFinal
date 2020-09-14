export class PRODUCTO {

    id_prod: number;
    nombre: string;
    precio: number;
    disponibilidad: string;
    est: string;
    imagen: string;
    descripcion: string;

    constructor(pId_prod: number, pNombre: string, pPrecio: number, pDisponibilidad: string, pEst: string, pImagen: string, pDescripcion: string) {



        this.id_prod = pId_prod;
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.disponibilidad = pDisponibilidad;
        this.est = pEst;
        this.imagen = pImagen;
        this.descripcion = pDescripcion;

    }
}