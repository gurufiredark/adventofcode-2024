import input from "./input.ts";

function calcularDistancia(lista1: number[], lista2: number[]): number {
    
    const lista1ordenada = lista1.sort();
    const lista2ordenada = lista2.sort();
    let distancia = 0;

    for (let i = 0; i < lista1.length; i++) {
        
        distancia += calcularDiferenca(lista1ordenada[i], lista2ordenada[i]);
    }
    return distancia;
}

function calcularDiferenca(n1: number, n2: number): number {
    return Math.abs(n1 - n2);
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

const rusult = calcularDistancia(lista1, lista2);
console.log(rusult);