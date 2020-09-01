export class CLIENTE {

    id_cliente: number;
    nombre: string;
    apellidos: string;
    telefono: number;
    direccion: string;
    email: string;

    constructor(pIdCliente: number, pNombre: string, pApellidos: string, pTelefono: number, pDireccion: string, pEmail: string) {

        this.id_cliente = pIdCliente;
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.telefono = pTelefono;
        this.direccion = pDireccion;
        this.email = pEmail;
    }

}