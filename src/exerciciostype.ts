interface Carroo{
    marca:string;
    modelo:string;
    ano:number;
    motor?:string;
}
const meucarro: Carroo = {
    marca: "Hb20",
    modelo: "Hyundai",
    ano: 2023,
  
}
console.log(meucarro);

// exercicio 2
interface Multiplicacao {
   (num:number,num2:number): number;
}
const multiplicar: Multiplicacao = (n,n2) => n * n2;
console.log(multiplicar(56,230));
console.log(multiplicar(12,23));
console.log(multiplicar(9,520));

//exercicio 3
function inverterArray<T>(array: T[]): T[]{
    return array.reverse();
}
console.log(inverterArray([1,2,3,4]));
console.log(inverterArray(["oi","tudo","bem"]));

//exercicio 4
interface Repositorio<T>{
    salvar(dado: T):void ;
    obterTodos(): T[];
}
type Pessoa = {
    nome : string;
    email : string;
}

class RepositorioPessoa implements Repositorio<Pessoa>{
    private pessoa: Pessoa[] = [];

    salvar(pessoa:Pessoa):void{
        this.pessoa.push(pessoa);
    }
    obterTodos(): Pessoa[] {
        return this.pessoa;
    }
}
const repositorio = new RepositorioPessoa();

const Maria: Pessoa = { nome: "Maria", email: "maria@email.com" };
const Marcos: Pessoa = { nome: "Marcos", email: "marcos@email.com" };

repositorio.salvar(Marcos);
repositorio.salvar(Maria);
console.log(repositorio.obterTodos());