//Fazer esquema em que um código declara uma  variável (let) e uma função faz a soma do valor da  variável com um valor estático (5, por exemplo)  como retorno. 

let minhaVariavel = 10;

function somarCinco() {
  return minhaVariavel + 5;
}

export { minhaVariavel, somarCinco };
