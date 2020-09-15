export class PEDIDO {

    id_pedido: number;
    cantidad: number;
    fecha_entrega: string;
    precio_total: number;
    id_cliente: number;
    direccion: string;
    descripcion: string;
    estado: string;

    constructor(pIdPedido: number, pCantidad: number, pFechaEntrega: string, pPrecioTotal: number, pIdClientePedido: number, pDireccion: string, pDescripcion: string, pEstado: string) {
        this.id_pedido = pIdPedido;
        this.cantidad = pCantidad;
        this.fecha_entrega = pFechaEntrega;
        this.precio_total = pPrecioTotal;
        this.id_cliente = pIdClientePedido;
        this.direccion = pDireccion;
        this.descripcion = pDescripcion;
        this.estado = pEstado;
    }

} 
