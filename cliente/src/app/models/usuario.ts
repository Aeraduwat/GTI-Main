export class Usuario {

    _id?:number;
    user:string;
    clave:string;
    nivel:string;
    correo:string;

    constructor(user:string,clave:string,nivel:string,correo:string){
        this.user = user;
        this.clave = clave;
        this.nivel = nivel;
        this.correo = correo;
    }
}