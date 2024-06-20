// ___________________________________________________________Q1_______________________________________________________________________________________________________________
// var num = Number(prompt('Digite um numero para verificar se é par e positivo: '));

// if (num % 2 == 0 && num > 0){
//     console.log('O numero é par e positivo!')
// }

// else{
//     console.log('O numero não é par ou não é positivo')
// }

// ___________________________________________________________Q2_______________________________________________________________________________________________________________

// var peso = Number(prompt('Digite o seu peso: '));
// var altura = Number(prompt('Digite a sua altura: '));
// var imc;
// imc = peso/(altura*altura);

// if (imc < 16.9){
//     console.log('Você está muito abaixo do peso!')
// }

// else if (imc >=17 && imc < 18.4){
//     console.log('Você está abaixo do peso!')
// }

// else if (imc >=18.5 && imc < 24.9){
//     console.log('Você está no peso ideal!')
// }

// else if (imc >=25 && imc < 29.9){
//     console.log('Você está acima do peso!')
// }

// else if (imc >=30 && imc < 34.9){
//     console.log('Você está com obesidade grau I!')
// }

// else if (imc >=35 && imc < 40){
//     console.log('Você está com obesidade grau II!')
// }

// else{
//     console.log('Você está com obesidade grau III!')
// }

// ___________________________________________________________Q3_______________________________________________________________________________________________________________

// var valor = Number(prompt('Digite o valor do produto: '));
// var idade = Number(prompt('Digite a sua idade: '));

// if (idade < 18){
//     valor = valor - valor*0.10
//     console.log(`Você vai pagar o valor de `,valor,`reais` )
// }

// else{
//     console.log(`Você vai pagar `,valor, `reais`)
// }

// ___________________________________________________________Q4_______________________________________________________________________________________________________________

// var letra = (prompt('Digite uma letra pra saber se é vogal ou consoante: '));

// if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ){
//     console.log('A letra é uma vogal')
// }


// else{
//     console.log('A letra é uma consoante')
// }

// ___________________________________________________________Q5_______________________________________________________________________________________________________________

// var num = Number(prompt('Digite um numero entre 1 e 7 para saber qual dia da semana corresponde: '));

// switch (num){
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda')
//         break
        
//     case 3:
//         console.log('Terça')
//         break

//     case 4:
//         console.log('Quarta')
//         break
    
//     case 5:
//         console.log('Quinta')
//         break
    
//     case 6:
//         console.log('Sexta')
//         break
    
//     case 7:
//         console.log('Sabado')
//         break
//     default:
//         console.log('Digite só entre 1 e 7')
// }

// ___________________________________________________________Q6_______________________________________________________________________________________________________________
// var num = Number(prompt('Digite um numero para saber se é primo: '));

// if(num>1 && num%2 == 0){
//     if (num == 2){
//         console.log('O numero é primo ')
//     }
//     else {
//         console.log('Não é primo')
//     }
// }

// else if(num>1 && num%2 != 0){
//     if (num == 3 || num == 5){
//         console.log('O numero é primo')
//     }
//     else if (num % 3 != 0 && num % 5 != 0){
//         console.log('O numero é primo')
//     }
//     else{
//         console.log('O numero não é primo')
//     }
// }
// else{
//     console.log('Não é primo')
// }