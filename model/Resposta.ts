export default class Resposta{


    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor:string, certa: boolean, revelada=false){
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    revelar() {
       return new Resposta(this.#valor, this.#certa, true);
    }

    static certa(valor: string){
        return new Resposta(valor, true)
    }
    
    static errada(valor: string){
        return new Resposta(valor, false)
    }
    get valor(){
        return this.#valor
    }

    get certa(){
        return this.#certa
    }

    get revelada(){
        return this.#revelada
    }

    static criarUsandoObjeto(obj:Resposta):Resposta{
        return new Resposta(obj.valor, obj.certa, obj.revelada)
    }

    paraObjeto(): any {
       return{
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
       }
    }
}