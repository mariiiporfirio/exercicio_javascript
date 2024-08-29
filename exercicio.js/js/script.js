// Crie uma variável para armazenar seu nome completo
const nome_completo = "Mariana Porfirio";
console.log(nome_completo);
console.log("___________________________________________________");

// Crie uma variável para armazenar se você gosta de programar (true ou false)
let like_programar = true;
console.log("Você gosta de programar ?");
console.log(like_programar);
console.log("___________________________________________________");

// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável
let numero_a = 1;
let numero_b = 2;
let numero_c = 3;
let numero_d = 4;
let numero_e = 5;
let numero_f = 10;

//2 + (3 x 4) - 5
let resultado1 = numero_b + (numero_c * numero_d) - numero_e;
console.log(resultado1);
console.log("___________________________________________________");

//2 x (3 + 4) - 5 ÷ 5
let resultado2 = numero_b * (numero_c + numero_d) - (numero_e / numero_e);
console.log(resultado2);
console.log("___________________________________________________");

//{[(10 - 4) / 2] * 3} + 1
let resultado3 = (((numero_f - numero_d) / numero_b) * numero_c) + numero_a;
console.log(resultado3);
console.log("___________________________________________________");

//3 * 4 / 2 + 1 - 5
let resultado4 = ((numero_c * numero_d) / numero_b) + numero_a - numero_e;
console.log(resultado4);
console.log("___________________________________________________");

//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
const music_i = "I";
const music_think = "think";
const music_too = "too much now";
const music_believe = "believe that real";
console.log(`Prayin' for better pace for you and ${music_i} \n${music_i} see some grass growin' in winter's eyes \n${music_i} ${music_think} ${music_i} ${music_think} ${music_too} and drink ${music_too} \nTo numb it 'cause ${music_i} don't wanna die \n${music_i} ${music_believe} friends love you to no limit \n${music_i} ${music_believe} change lies in the mirror`);
console.log("___________________________________________________");

//Crie um programa que exiba a data atual formatada utilizando interpolação
const data = new Date();
let data_short = (data.getDate()) + "/0" + (data.getMonth() + 1) + "/" + (data.getFullYear());
console.log(`Hoje é dia ${data_short}.`);
console.log("___________________________________________________");

//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação
let altura = prompt("Digite a altura do retângulo:");
let base = prompt("Digite a largura do retângulo:");
let area_retangulo = base * altura

console.log(`A área do retângulo é ${area_retangulo} !`);
console.log("___________________________________________________");

//Crie uma condicional para verificar se o caractere é uma vogal
let letra = "m";

switch (letra) {
    case "a":
        console.log("A letra é uma vogal !");
        break;
    case "e":
        console.log("A letra é uma vogal !");
        break;
    case "i":
        console.log("A letra é uma vogal !");
        break;
    case "o":
        console.log("A letra é uma vogal !");
        break;
    case "u":
        console.log("A letra é uma vogal !");
        break;
    default:
        console.log("A letra e uma consoante !"); 
        break;
}
console.log("___________________________________________________");


//Crie uma condicional para verificar se o número é par ou é impar


//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno.
let ladoA = 10;
let ladoB = 12;
let ladoC = 18;

if (ladoA === ladoB && ladoA === ladoC) {
    console.log("Equilátero.");
} else if (ladoA === ladoB && ladoA !== ladoC) {
    console.log("Isósceles.");
} else {
    console.log("Escaleno.");
}
console.log("___________________________________________________");

//Calcule a média do aluno e verifique se ele foi aprovado
let media = prompt("Digite a sua nota:");
console.log(`Sua média é ${media}.`)

switch (true) {
    case (media<= 6 && media >= 0):
        console.log("Você foi reprovado !");
        break;
    case (media >= 7 && media <= 10):
        console.log("Você foi aprovado !");
        break;
    default:
        console.log("Dados inválidos !")
        break;
}
console.log("___________________________________________________");

// Crie uma variável para armazenar um array com seus hobbies
const hobbies = ["Ler", "Filmes", "Séries"];
console.log(hobbies);
console.log("___________________________________________________");

/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.
*/
const frutas = ["Maça", "Uva", "Banana", "Melão", "Limão"];
console.log(frutas[1])
frutas.push("Laranja", "Pitanga");
console.log(frutas);
frutas.shift();
console.log(frutas);
console.log("___________________________________________________");

/* Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.*/
let variavel = 14.25;
console.log(`A variavel ${variavel} é um tipo de ${typeof variavel}.`);

/* Crie um programa (Switch) que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */
