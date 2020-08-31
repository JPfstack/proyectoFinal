export class Cliente {

    idCliente: number;
    nombre: string;
    apellidos: string;
    telefono: number;
    direccion: string;
    codigoPostal: number;
    email: string;

    constructor(pIdCliente: number, pNombre: string, pApellidos: string, pTelefono: number, pDireccion: string, pCodigoPostal: number, pEmail: string) {

        this.idCliente = pIdCliente;
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.telefono = pTelefono;
        this.direccion = pDireccion;
        this.codigoPostal = pCodigoPostal;
        this.email = pEmail;

    }

}