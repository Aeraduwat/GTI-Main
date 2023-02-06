export class Corporativo{

    id_Corporativo?:number;
    sector:string;
    institucion:string;
    nombre:string;
    cargo:string;
    saliencia:number;
    influencia:number;
    poder_efectivo:number;
    rango:number;

    constructor(sector:string, institucion:string, nombre:string, cargo:string, saliencia:number, influencia:number, poder_efectivo:number, rango:number){
        this.sector = sector;
        this.institucion = institucion;
        this.nombre = nombre;
        this.cargo = cargo;
        this.saliencia = saliencia;
        this.influencia = influencia;
        this.poder_efectivo = poder_efectivo;
        this.rango = rango;
    }

}