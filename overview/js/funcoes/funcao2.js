//uma função chama a outra
function myDisplayer(some){
    console.log(some)
}
function myCalculator(num1, num2){
    let sum = num1 + num2
    myDisplayer(sum)
}
console.log('Funções juntas')
myCalculator(5, 10)
//o problema é que não há como impedir a calculadora de exibir o resultado

