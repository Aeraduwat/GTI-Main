export class Ambito_Territorial{

    _id?:number;
    region:string;
    reg_conflicto:number;
    reg_inversiones:number;
    potencial_reputacion:number;
    total_territorial:number;

    constructor(region:string, reg_conflicto:number, reg_inversiones:number, potencial_reputacion:number, total_territorial:number){
        this.region = region;
        this.reg_conflicto = reg_conflicto;
        this.reg_inversiones = reg_inversiones;
        this.potencial_reputacion = potencial_reputacion;
        this.total_territorial = total_territorial;
    }
}