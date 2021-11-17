import QuestaoModel from "../../model/QuestaoModel";
import Resposta from "../../model/Resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
      Resposta.errada('Abelha'),
      Resposta.errada('Barata'),
      Resposta.errada('Pulga'),
      Resposta.certa('Barbeiro'),
  ]),
  new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
      Resposta.errada('Caju'),
      Resposta.errada('Côco'),
      Resposta.errada('Chuchu'),
      Resposta.certa('Abóbora'),
  ]),
  new QuestaoModel(203, 'Qual é o coletivo de cães?', [
      Resposta.errada('Manada'),
      Resposta.errada('Alcateia'),
      Resposta.errada('Rebanho'),
      Resposta.certa('Matilha'),
  ]),
  new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
      Resposta.errada('Equilátero'),
      Resposta.errada('Isóceles'),
      Resposta.errada('Trapézio'),
      Resposta.certa('Escaleno'),
  ]),
  new QuestaoModel(205, 'Quem compôs o Hino da Independência?', [
      Resposta.errada('Castro Alves'),
      Resposta.errada('Manuel Bandeira'),
      Resposta.errada('Carlos Gomes'),
      Resposta.certa('Dom Pedro I'),
  ]),
  new QuestaoModel(206, 'Qual é o antônimo de "malograr"?', [
      Resposta.errada('Perder'),
      Resposta.errada('Fracassar'),
      Resposta.errada('Desprezar'),
      Resposta.certa('Conseguir'),
  ]),
  new QuestaoModel(207, 'Em que país nasceu Carmen Miranda?', [
      Resposta.errada('Argentina'),
      Resposta.errada('Espanha'),
      Resposta.errada('Brasil'),
      Resposta.certa('Portugal'),
  ]),
  new QuestaoModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
      Resposta.errada('Costa e Silva'),
      Resposta.errada('Emílio Médici'),
      Resposta.errada('Ernesto Geisel'),
      Resposta.certa('João Figueiredo'),
  ]),
  new QuestaoModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
      Resposta.errada('Ás'),
      Resposta.errada('Nove'),
      Resposta.errada('Rei'),
      Resposta.certa('Valete'),
  ]),
  new QuestaoModel(210, 'O adjetivo "venoso" está relacionado a:', [
      Resposta.errada('Vela'),
      Resposta.errada('Vento'),
      Resposta.errada('Vênia'),
      Resposta.certa('Veia'),
  ]),
  new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
      Resposta.errada('Abrupção'),
      Resposta.errada('Abolição'),
      Resposta.errada('Abnegação'),
      Resposta.certa('Ablução'),
  ]),
  new QuestaoModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
      Resposta.errada('Monte Branco'),
      Resposta.errada('Monte Fuji'),
      Resposta.errada('Monte Carlo'),
      Resposta.certa('Monte Everest'),
  ]),
  new QuestaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
      Resposta.errada('Estômago'),
      Resposta.errada('Pâncreas'),
      Resposta.errada('Rim'),
      Resposta.certa('Pescoço'),
  ]),
  new QuestaoModel(214, 'A compensação por perda é chamada de...', [
      Resposta.errada('Déficit'),
      Resposta.errada('Indexação'),
      Resposta.errada('Indébito'),
      Resposta.certa('Indenização'),
  ]),
  new QuestaoModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
      Resposta.errada('Cuca'),
      Resposta.errada('Curupira'),
      Resposta.errada('Boitatá'),
      Resposta.certa('Saci-pererê'),
  ]),
  new QuestaoModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
      Resposta.errada('Marechal Deodoro'),
      Resposta.errada('Barão de Mauá'),
      Resposta.errada('Marquês de Pombal'),
      Resposta.certa('Duque de Caxias'),
  ]),
]

export default questoes