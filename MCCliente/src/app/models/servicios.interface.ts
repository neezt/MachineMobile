export interface ServicioI {
    id?:string;
    clienteId: string;
    especialista: any;
    createdAt: any;
    descripcion: string;
    fechaServicio: any;
    equipo: string;
    frecuenciaFalla:string;
    plataforma : string;
    seccionFalla : string;
    servicio : number;
    status : string;
    tipo : string;
    direccion : string;
    position: any
}