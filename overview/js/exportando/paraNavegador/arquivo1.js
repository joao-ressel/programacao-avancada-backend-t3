//Fazer esquema em que um código declara uma variável (let) e uma função faz a soma do valor da variável com um valor estático (5, por exemplo) como retorno. 

// o CommonJS e algumas funcionalidades de módulos não estão disponíveis nativamente para navegadores.
// Para executar no navegador, usa-se uma abordagem diferente, a função IIFE (Immediately Invoked Function Expression) encapsular seu código.

(function () {
    let variavel = 10;
  
    function somarCinco() {
      return variavel + 5;
    }
  
    window.somando = {
      variavel,
      somar
    };
  })();
