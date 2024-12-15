import input from "./input.ts";

function somaSimilares(lista1: number[], lista2: number[]): number {
    
    const lista1ordenada = lista1.sort((a,b)=> b - a);
    const lista2ordenada = lista2.sort((a,b)=> b - a);

    let aux = lista1ordenada.map(n1 => n1 * frenquencia(n1, lista2ordenada));
    return aux.reduce((acumulador, soma) => acumulador + soma, 0);
}

function frenquencia(numeroLista1:number, lista2: number[]): number{
    return lista2.filter(n => n === numeroLista1).length;
}

function pegarListaInput(input: string): [number[], number[]] {
    const lista1: number[] = [];
    const lista2: number[] = [];
    
    input.split("\n").forEach(linha => {
        const [num1, num2] = linha.split(/\s+/).map(Number);
        lista1.push(num1);
        lista2.push(num2);
    });
    return [lista1, lista2];
}

const [lista1, lista2] = pegarListaInput(input);

const rusult = somaSimilares(lista1, lista2);
console.log(rusult);