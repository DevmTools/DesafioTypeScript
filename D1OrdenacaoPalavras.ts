import { count, log } from "node:console";
//DESAFIO 1 – Frequência de Palavras (nível fácil-médio)
/* 
    Dada uma string contendo palavras separadas por espaço, 
    conte quantas vezes cada palavra aparece.
    Em seguida, imprima o resultado em ordem alfabética.

    1 > Contar Palavras
    2 > imprimir em ordem

*/
function countWords(text: string): void {
  const palavras = text.split(" "); //Transforma a string em um array => ["uva", "banana", "maçã", "banana", "maçã", "banana", "uva"]

  //O Map armazena pares chave => valor
  //Se a palavra já existe, o set() metodo do map atualiza o valor.
  //Se a palavra ainda não existe, o set() metodo do map cria a chave com o valor.
  const countPalavras = new Map<string, number>();

  for (const palavra of palavras) {
    //Contagem.get(palavra) pega a contagem atual.
    //Se não existir (undefined), o || 0 faz começar de zero.
    //Depois soma 1.
    //E atualiza com contagem.set(chave, valor).
    countPalavras.set(palavra, (countPalavras.get(palavra) || 0) + 1);
  }

  //log(countPalavras.entries()); //countPalavras mostra o objeto Map => Object { [ 'uva', 2 ], [ 'banana', 3 ], [ 'maçã', 2 ] }

  //contagem.entries() gera pares como [palavra, quantidade]
  //Array.from() transforma isso em array
  //(a, b) => a[0].localeCompare(b[0]) É uma arrow function de comparação usada para dizer ao .sort() para comparar as palavras
  const ordenados = Array.from(countPalavras.entries()).sort((a, b) => a[0].localeCompare(b[0])); //ordenação usando a string(alfabética), na posiçao [0]
  //const ordenados = Array.from(countPalavras.entries()).sort((a, b) => b[1] - a[1]); //ordenação usando a do maior para o menor(numérico), na posiçao [1]

  //log(ordenados); //ordenados mostra o Array criado com os valores ordenados alfabéticamente(pois pega a posição [0] do verto, no nosso caso contem a chave)do Object Map => Array [ [ 'banana', 3 ], [ 'maçã', 2 ], [ 'uva', 2 ] ]

  for (const [palavra, quantidade] of ordenados) {
    log(`${palavra} : ${quantidade}`);
  }
}

countWords("banana maçã maçã banana maçã maçã banana uva");
