export class PRODPEDIDO {

    fk_id_producto: number;
    fk_id_pedido: number;
    cantidad: number;


    constructor(pfk_id_producto: number, pfk_id_pedido: number, pcantidad: number) {

        this.fk_id_producto = pfk_id_producto;
        this.fk_id_pedido = pfk_id_pedido;
        this.cantidad = pcantidad;
    }
}
