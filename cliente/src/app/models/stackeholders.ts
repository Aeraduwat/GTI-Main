export class Stackeholders{

    _id?:string;
    nombre:string;
    region:string;
    cargo:string;


    constructor(nombre:string, region:string, cargo:string){
      
        this.nombre = nombre;
        this.region = region;
        this.cargo = cargo;
    }

}