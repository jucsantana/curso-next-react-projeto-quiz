import React, { useEffect, useRef, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/QuestaoModel";
import { useRouter } from "next/router";


  const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
 
 const router = useRouter()
 const [questao, setQuestao] = useState<QuestaoModel>()
 const [respostasCertas, setRespostasCertas] = useState<number>(0)
 const [idsDasQuestoes, setIdDasQuestoes] = useState<number[]>([])

 async function corregarIdsDasQuestoes(){
   const resp = await fetch(`${BASE_URL}/questionario`)
   const idsDasQuestoes = await resp.json()
   console.log(idsDasQuestoes)
   setIdDasQuestoes(idsDasQuestoes)
 }
 async function carregarQuestao(idQuestao:number){
   const resp = await fetch(`${BASE_URL}/questao/${idQuestao}`)
   const json = await resp.json()
   console.log(json)
   setQuestao(QuestaoModel.criarUsandoObjeto(json))
 }

useEffect(() =>{
  corregarIdsDasQuestoes()
}, [])

useEffect(() =>{
  idsDasQuestoes.length> 0 && carregarQuestao(idsDasQuestoes[0])
}, [idsDasQuestoes])

function questaoRespondida(questaoRespondida: QuestaoModel){
   setQuestao(questaoRespondida)
   const acertou = questaoRespondida.acertou
   setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
}

function idProximaPergunta(){
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndice]
}

function irPraProximoPasso(){
  const proximoId = idProximaPergunta()
  proximoId ? irPraProximaQuestao(proximoId) : finalizar()
}

function irPraProximaQuestao(proximoId: number){
  carregarQuestao(proximoId)
}

function finalizar(){
  router.push({
    pathname:"/resultado",
    query:{
        total:idsDasQuestoes.length,
        certas:respostasCertas}
      }
  )
}

  return (
    <div style={{
      display:'flex',
      flexDirection:"column",
      justifyContent: 'center',
      alignItems:'center',
      height: '100vh'
    }}>
      {questao ? <Questionario
          questao={questao}
          ultima={idProximaPergunta()===undefined}
          questaoRespondida={questaoRespondida}
          irPraProximoPasso={irPraProximoPasso}
          /> : false }
    
    </div>
  )
}
