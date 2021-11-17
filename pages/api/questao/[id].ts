import QuestaoModel from "../../../model/QuestaoModel";
import questoes from "../BancoDeQuestoes"

const questao = (req, resp)=>{
    const idSelecionado = +req.query.id;
    const questaoSelecionada:QuestaoModel[] =questoes.filter(q => q.id === idSelecionado)

    if(questaoSelecionada.length===1){
        resp.status(200).json(questaoSelecionada[0]
                                .embaralharRespostas()
                                //.responderCom(1)
                                .paraObjeto())
    }else{
        resp.status(204).send()
    }
}

export default questao