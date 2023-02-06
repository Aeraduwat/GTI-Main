export class Stackeholders{

    _id_sh?:number;
    sector:string;
    region:string;
    institucion:string;
    autoridad:string;
    cargo:string;
    adhesion:number;
    influencia:number;
    partido:string;
    coalicion:string;


    constructor(sector:string, region:string, institucion:string, autoridad:string, cargo:string, adhesion:number, influencia:number, partido:string, coalicion:string){
        this.sector = sector;
        this.region = region;
        this.institucion = institucion;
        this.autoridad = autoridad;
        this.cargo = cargo;
        this.adhesion = adhesion;
        this.influencia = influencia;
        this.partido = partido;
        this.coalicion = coalicion;
    }

}