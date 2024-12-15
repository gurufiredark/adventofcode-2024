import  input  from "./input";

//Parte 1
function listasOrdenadas(listas: number[][]): number[][] {
    
    return  listas.filter(lista => {
        const crescente = lista.every((num, i) => i === 0 || num >= lista[i - 1]);
        const decrescente = lista.every((num, i) => i === 0 || num <= lista[i - 1]);

        return crescente || decrescente;
    });
}

function verificaRelatorio(listas: number[][]): number {
    let resultado: number = 0;

    listas.forEach(lista => {
        let todasDiferencasValidas = true;
        
        for (let i = 0; i < lista.length - 1; i++) {
            const diferenca = Math.abs(lista[i] - lista[i + 1]);
            if (diferenca > 0 && diferenca <= 3) {
                continue;
                
            }else {
                todasDiferencasValidas = false;
            }
        }

        if (todasDiferencasValidas) {
            resultado++;
        }
    });

    return resultado;
}

//Parte 2
function removeNivel(listas: number[][]): number {
    let resultado: number = 0;
    return resultado;
}


function transformarInput(input: string): number[][] {
    return input.split("\n").map(linha => linha.split(/\s+/).map(Number));
}

const listas = transformarInput(input);

const resultado_parte1 = verificaRelatorio(listasOrdenadas(listas));

console.log(resultado_parte1);