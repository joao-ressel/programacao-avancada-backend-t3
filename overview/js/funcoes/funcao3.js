// usando callback
function myDisplayer(some){
    console.log(some)
}
function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2
    myCallback(sum)
}
console.log('Callback')
myCalculator(10,10, myDisplayer)
// o programa segue mas volta para buscar a função
// ou a função dissesse 'eu vou ligar de volta mais tarde'
