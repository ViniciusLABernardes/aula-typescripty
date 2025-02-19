let mensagem :string = "Olá typescript!"; 
console.log(mensagem);

let valores : number[] = [10,20,30];
let somaValores : number = valores.reduce((acc, val) => acc + val, 0);
console.log(somaValores);

function mensagemPerso(mensagem : string):string{
    return `${mensagem} <<< esta foi sua mensagem!`;
}
console.log(mensagemPerso("Meu nome é michael jackson"));

