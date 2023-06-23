//chamando duas funções separadas
function myDisplayer(some){
    console.log(some)
}
function myCalculator(num1, num2){
    let sum = num1 + num2
    return sum
}
console.log('Duas funções separadas')
let result = myCalculator(5,5)
myDisplayer(result)

//o problema é que é preciso chamar duas funçoes para exibir o resultado