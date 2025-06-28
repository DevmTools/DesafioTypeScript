import { count, log } from "node:console";

/* 
    Dada uma string contendo palavras separadas por espaço, 
    conte quantas vezes cada palavra aparece.
    Em seguida, imprima o resultado em ordem alfabética.

    1 > Contar Palavras
    2 > imprimir em ordem

*/
function countWords(text: string): void {
  const palavras = text.split(" ");
  const countPalavras = new Map<string, number>();

  for (const palavra of palavras) {
    countPalavras.set(palavra, (countPalavras.get(palavra) || 0) + 1);
  }

  const ordenados = Array.from(countPalavras.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [palavra, quantidade] of ordenados) {
    log(`${palavra} : ${quantidade}`);
  }
}

countWords("uva banana maçã banana maçã banana uva");
