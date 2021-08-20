import Tarefa from '../model/Tarefa'
import ListaTarefas from '../model/ListaTarefas'
import TipoFiltro from '../model/TipoFiltro'

const tarefasIniciais: Tarefa[] = [
  //Tarefa.criarAtiva(1, 'Estudar Next'),
  // Tarefa.criarConcluida(2, 'Limpar Carro'),
  // Tarefa.criarAtiva(3, 'Comprar livro do mês')
]

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)