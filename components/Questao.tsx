import React from "react"
import QuestaoModel from "../model/QuestaoModel"
import styles from '../styles/Questao.module.css'
import Enunciado from "./Enunciado"
import Resposta from "./Resposta"
import Temporizador from "./Temporizador"

interface QuestaoProps{
    valor:QuestaoModel,
    tempoPraResposta?:number,
    respostaFornecida:(indice:number) => void
    tempoEsgotado: () => void
}

export default function Questao(props:QuestaoProps){

    const questao = props.valor

    function LetrasECores(indice: number){
        switch (indice) {
            case 0:
                return {letra:criaLetras(indice), cor:'#F2C866'}
                break;
            case 1:
                return {letra:criaLetras(indice),  cor:'#F266BA'}
                break;
            case 2:
                return {letra:criaLetras(indice), cor:'#85D4F2'}
                break;
            case 3:
                return {letra:criaLetras(indice), cor:'#BCE596'}
                break;
        
            default:
                return {letra:criaLetras(indice), cor:'#000'}
                break;
        }
    }

    function criaLetras(indice:number){
        return String.fromCharCode(65+indice)
    }

    function renderizarRespostas(){
        return questao.respostas.map((resp, i) => {
            return <Resposta 
                    corFundoLetra={LetrasECores(i).cor}
                    indice={i}
                    letra= {LetrasECores(i).letra}
                    valor={resp}
                    key={`${questao.id}- ${i}`}
                    respostaFornecida={props.respostaFornecida}/>
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador 
            key={questao.id}
            duracao={props.tempoPraResposta ?? 10}
            tempoEsgotado={props.tempoEsgotado}/>
            {renderizarRespostas()}
        </div>
    )

}