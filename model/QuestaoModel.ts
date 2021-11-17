import Embaralhar from "../pages/api/functions/arrays"
import Resposta from "./Resposta"

export default class QuestaoModel{
    #id: number
    #enunciado: string
    #respostas: Resposta[]
    #acertou: boolean
    #respondida:boolean

    constructor(id:number, 
            enunciado:string,
            respostas:Resposta[], 
            acertou?:boolean, 
            respondida: boolean = false){
        this.#id = id
        this.#enunciado=enunciado
        this.#respostas = respostas
        this.#acertou = acertou
        this.#respondida=respondida
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#acertou
    }

    get naoRespondida(){
        return !this.#respondida
    }

    get respondida(){
        return this.#respondida
    }

    responderCom(indice:number):QuestaoModel{
        
        const acertou = this.#respostas[indice]?.certa
        const respondida = true;
        
        let respostasComSelecionada = this.#respostas.map((r, i)=>{
               if(i==indice || r.certa){
                return r.revelar();     
               }else{
                return r
               } 
        })

        return new QuestaoModel(
               this.#id,
               this.#enunciado, 
               respostasComSelecionada,
               acertou,
               respondida);     
        

    }

    embaralharRespostas():QuestaoModel{
        let respostaEmbaralhada = Embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado,respostaEmbaralhada,this.#acertou)
    }

    static criarUsandoObjeto(obj:QuestaoModel):QuestaoModel{
        const respostas:Resposta[] = obj.respostas.map(resp => Resposta.criarUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou, obj.respondida)
    }

    paraObjeto(){
      return {  
          id: this.#id, 
          enunciado: this.#enunciado,
          respondida: this.#respondida,
          acertou: this.#acertou,
          respostas: this.#respostas.map(r => r.paraObjeto())
        }
    }

}