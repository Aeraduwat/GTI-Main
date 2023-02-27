export class Representacion_territorial{

    id_Rt?:number;
    region:string;
    institucion:string;
    nombre_autoridad:string;
    cargo:string;
    partido_politico:string;
    ambito_territorial:number;

    constructor(region:string, institucion:string, nombre_autoridad:string, cargo:string, partido_politico:string, ambito_territorial:number){
        this.region = region;
        this.institucion = institucion;
        this.nombre_autoridad = nombre_autoridad;
        this.cargo = cargo;
        this.partido_politico = partido_politico;
        this.ambito_territorial = ambito_territorial;

    }
}