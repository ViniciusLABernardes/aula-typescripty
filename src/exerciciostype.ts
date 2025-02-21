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

interface Multiplicacao {
   (num:number,num2:number): number;
}
const multiplicar: Multiplicacao = (n,n2) => n * n2;
console.log(multiplicar(56,230));
console.log(multiplicar(12,23));
console.log(multiplicar(9,520));