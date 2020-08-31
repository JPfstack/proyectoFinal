export class Pedido {

    idPedido: number;
    peso: number;
    fechaEntrega: string;
    precioTotal: number;
    idClientePedido: number;

    constructor(pIdPedido: number, pPeso: number, pFechaEntrega: string, pPrecioTotal: number, pIdClientePedido: number) {
        this.idPedido = pIdPedido;
        this.peso = pPeso;
        this.fechaEntrega = pFechaEntrega;
        this.precioTotal = pPrecioTotal;
        this.idClientePedido = pIdClientePedido;
    }

}