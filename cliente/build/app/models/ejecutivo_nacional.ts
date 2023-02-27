export class Ejecutivo_nacional{

    id_En?:number;
    organismo:string;
    nombre:string;
    cargo:string;
    saliencia:number;
    influencia:number;
    poder_efectivo:number;
    rango:number;

    constructor(organismo:string, nombre:string, cargo:string, saliencia:number, influencia:number, poder_efectivo:number, rango:number){
        this.organismo = organismo;
        this.nombre = nombre;
        this.cargo = cargo;
        this.saliencia = saliencia;
        this.influencia = influencia;
        this.poder_efectivo = poder_efectivo;
        this.rango = rango;
    }
}