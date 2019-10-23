export interface ServicioI {
    id?:string;
    clienteId: string;
    especialista: any;
    createdAt: any;
    commentarios: string;
    descripcion: string;
    direccion : string;
    fechaServicio: any;
    fechaInicio: any;
    fechaFinaliza: any;
    tiempoTrabajo: any;
    equipo: string;
    frecuenciaFalla:string;
    plataforma : string;
    seccionFalla : string;
    servicio : number;
    status : string;
    statusEquipo: string;
    tipo : string;
    position: any;
    notas: any;
    cliente: any;
    evaluacion: any;
}