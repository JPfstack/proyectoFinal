export class CARRITO {

    id_producto: number;
    id_cliente: number;
    id_pedido: number;
    imagen: string;
    precio: number;
    cantidad: number;


    constructor(pId_producto: number, pId_cliente: number, pId_pedido: number, pImagen: string, pPrecio: number, pCantidad: number) {

        this.id_producto = pId_producto;
        this.id_cliente = pId_cliente;
        this.id_pedido = pId_pedido;
        this.imagen = pImagen;
        this.precio = pPrecio;
        this.cantidad = pCantidad;
    }

}