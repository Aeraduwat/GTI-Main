export class Ejecutivo_regional{

    id_Er?:number;
    region:string;
    institucion:string;
    nombre_autoridad: string;
    cargo:string;
    reg_conflicto:number;
    reg_inversiones:number;
    potencial_reputacional:number;
    total_territorial:number;

    constructor(region:string, institucion:string, nombre_autoridad:string, cargo:string, reg_conflicto:number, reg_inversiones:number, potencial_reputacional:number, total_territorial:number){
        this.region = region;
        this.institucion = institucion;
        this.nombre_autoridad = nombre_autoridad;
        this.cargo = cargo;
        this.reg_conflicto = reg_conflicto;
        this.reg_inversiones = reg_inversiones;
        this.potencial_reputacional = potencial_reputacional;
        this.total_territorial = total_territorial;
    }
}