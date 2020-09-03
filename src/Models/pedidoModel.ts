export class PEDIDO {

    idPedido: number;
    cantidad: number;
    fechaEntrega: string;
    precioTotal: number;
    idClientePedido: number;

    constructor(pIdPedido: number, pCantidad: number, pFechaEntrega: string, pPrecioTotal: number, pIdClientePedido: number) {
        this.idPedido = pIdPedido;
        this.cantidad = pCantidad;
        this.fechaEntrega = pFechaEntrega;
        this.precioTotal = pPrecioTotal;
        this.idClientePedido = pIdClientePedido;
    }

}