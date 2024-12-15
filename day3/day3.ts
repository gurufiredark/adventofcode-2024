import input from './input';

// Parte 1
// mul(Multiplicação entre 2 numeros de 3 digitos  inteiros positivos ), ao final soma o valor das multiplicações

function mul(listaMul: string[]): number {
    let resultado: number = 0;
    
    for (let i = 0; i < listaMul.length; i++) {
        const [num1, num2] = listaMul[i].match(/\d+/g)!.map(Number);
        resultado += num1 * num2;
    }
    
    return resultado;
}

const mulString = input.match(/mul\(\d+,\d+\)/g) || [];

const resultado = mul(mulString);

console.log(resultado);