import questoes from "../BancoDeQuestoes"
import Embaralhar from "../functions/arrays"

const questionario = (req, res) =>{
    res.status(200).json(Embaralhar(questoes.map(q => q.id)))
}

export default questionario