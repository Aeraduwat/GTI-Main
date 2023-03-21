export class Evaluacion{

    _id?:string;
    id_sh:string;
    adhesion:number;
    influencia:number;
    fecha:Date;

    constructor(id_sh:string, adhesion:number, influencia:number,fecha:Date){

        this.id_sh = id_sh;
        this.adhesion = adhesion;
        this.influencia = influencia;
        this.fecha = fecha;
    }




}