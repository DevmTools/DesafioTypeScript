// Importações
import { mensagem } from "./module"; //Importando modulos externos

/**
 * interface pode ser estendida, type não pode ser estendida
 */
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

/**
 * Variaveis mutáveis e imutáveis
 */
const anoNascimento: number = 1986; // Variavel imutável, seu valor não pode ser alterado após a declaraçao
let idade: number = 0; // Variavel mutável, seu valor pode ser alterado após sua declaração

/* Operador Ternario reatribuindo variavel mutavel */
idade =
  new Date().getFullYear() !== anoNascimento
    ? new Date().getFullYear() - anoNascimento
    : anoNascimento;
console.log(`\n\nVariavel Ano de Nascimento: ${anoNascimento} \nVariavel idade: ${idade}`);

/**
 * Funções
 */
function funcaoMostraMensagem(nome: string) {
  console.log(`Hello World, ${nome}!`);
}

/**
 * Classe
 */
class ClasseExemplo {
  private mensagem: string;
  constructor(mensagem: string) {
    this.mensagem = mensagem;
  }
  //função que só retorna string
  exibirMensagem(): string {
    return `Hello World, ${this.mensagem}!`;
  }
}

/**
 * Executar
 */
// Instanciando a ClasseExemplo e passando o parametro do modulo importado
const instanciaClasseExemplo = new ClasseExemplo(mensagem());
console.log(instanciaClasseExemplo.exibirMensagem());

//Exemplo de uso de interface
const usuario: Usuario = {
  id: 1,
  nome: "Jorge",
  email: "comunicacao@devm.com.br",
};
funcaoMostraMensagem(usuario.nome);
