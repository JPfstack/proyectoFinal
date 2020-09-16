export class CARRITO {

    id_producto: number;
    id_cliente: number;
    imagen: string;
    precio: number;
    cantidad: number;


    constructor(pId_producto: number, pId_cliente: number, pImagen: string, pPrecio: number, pCantidad: number) {

        this.id_producto = pId_producto;
        this.id_cliente = pId_cliente;
        this.imagen = pImagen;
        this.precio = pPrecio;
        this.cantidad = pCantidad;
    }

}