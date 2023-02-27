export class Encargados{

    _idEncargado?: number;
    nombre:string;
    correo:string;
    cargo:string;

    constructor(nombre:string, correo:string, cargo:string){
        this.nombre = nombre;
        this.correo = correo;
        this.cargo = cargo;
    }
}