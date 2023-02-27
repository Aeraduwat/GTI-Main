export class Reuniones{

    _id?: number;
    id_sh:string;
    cargo:string;
    regionAutoridad:number;
    fecha:Date;
    unidadesParticipantes:string;
    proyecto:string;
    tema:string;
    observaciones:string;

    constructor(sh:string,cargo:string,region:number,fecha:Date,participantes:string,proyecto:string,tema:string,observaciones:string){
        this.id_sh = sh;
        this.cargo = cargo;
        this.regionAutoridad = region;
        this.fecha = fecha;
        this.unidadesParticipantes = participantes;
        this.proyecto = proyecto;
        this.tema = tema;
        this.observaciones = observaciones;

    }
    
}