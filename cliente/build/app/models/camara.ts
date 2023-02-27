export class Camara{

    id_Camara?:number;
    region:string;
    institucion:string;
    distrito:string;
    nombre_autoridad: string;
    partido_politico:string;
    coalicion:string;
    ambito_territorial:number;
    ambito_regulatorio:number;

    constructor(region:string, institucion:string, distrito:string, nombre_autoridad:string, partido_politico:string, coalicion:string, ambito_territorial:number, ambito_regulatorio:number){
        this.region = region;
        this.institucion = institucion;
        this.distrito = distrito;
        this.nombre_autoridad = nombre_autoridad;
        this.partido_politico = partido_politico;
        this.coalicion = coalicion;
        this.ambito_territorial = ambito_territorial;
        this.ambito_regulatorio = ambito_regulatorio;
    }
}