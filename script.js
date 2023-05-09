//Laços de repetição (LOOP)
//****WHILE*** 

//No nosso sistema, o usuário será solicitado para inserir vários números, um após o outro
//Quando ele digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a 
//soma de todos os números por ele indicados
//Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
//O resultado deve ser: 70 
/*
function somaNumeros(){
    let numero = 100;
    let soma = 0;

    while(numero !== 0){
        numero = Number(prompt('Digite um numero'));
        soma += numero;
     
    }
    return soma;
}
console.log(somaNumeros());
*/
/*
let numero = 100;
let soma = 0;

while(numero > 0|| numero < 0){
    numero = Number(prompt("Informe um numero"));
    soma = soma + numero; 
}
console.log("A soma de todos os valores informados é: " + soma);
*/
//*****FOR****

//Escreva uma função que receba um array com números e devolva qual o maior dentro dele
//Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é 18"
/*
let numeros =[11,15,18,14,12,13]
function maiorNumero(numeros){
    let maior = 0;
    for(i = 0; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i];
        }
    }
    return maior;
}
console.log(numeros);
console.log(maiorNumero(numeros));
*/
//****FOR...OF...****

//Considere que você tem um array com várias palavras. 
//Nossa tarefa é criar uma função para imprimi-las em uma só mensagem colocando um espaço entre elas.
//Ex: Para este array ["Oi", "sumido", "tudo", "bem?", "Saudades"], dar a mensagem "Oi sumido tudo bem? Saudades"
/*
let palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"];
function construirFrase(arrayPalavras){
    let frase = '';
    for(let palavra of arrayPalavras){
        frase = frase + ' ' + palavra;
   }
   return frase;
}
console.log(construirFrase(palavras).trim());
*/

let paisesAr = ["brasil", "Argentina"];
let contador = 1;
let ufs = ["BR","Ar"];
for(let pais of paisesAr){
    for(let uf of ufs){
        console.log(contador++ + '- ' + pais + '/'+ uf);
    
    }
}
