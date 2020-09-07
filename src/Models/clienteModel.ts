export class CLIENTE {

    id_cliente: number;
    nombre: string;
    apellidos: string;
    telefono: number;
    direccion: string;
    email: string;
    password: string;

    constructor(pIdCliente: number, pNombre: string, pApellidos: string, pTelefono: number, pDireccion: string, pEmail: string, pPassword: string) {

        this.id_cliente = pIdCliente;
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.telefono = pTelefono;
        this.direccion = pDireccion;
        this.email = pEmail;
        this.password = pPassword;
    }

}