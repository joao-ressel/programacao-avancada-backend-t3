// setTimeout(mostrarData, 5000);
// // setTimeout(mostrarData, 5000);
// // setTimeout(mostrarData, 5000);
// setInterval(mostrarData, 5000);
// function mostrarData(){
//     data = new Date
//     console.log("Horas:" + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
// }
// //no setTimeout ele imprime 3 de uma vez após esperar um tempo
// // setInterval ele chama os 3 justos apos um intervalo de 5 segundos sem parar

// /*

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// */

// /*

// setTimeout(() => { console.log('esperando 5 segundos para aparecer...') } , 5000)

// console.log('quando isso aparece?')

// */

// /*

// Desafio: utilize a classe nativa Date para, dentro de uma função, exibir via console uma string com o dia, mês e ano atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer?

// Agora, utilize o método setInterval apenas uma vez no lugar de setTimeout e responda às mesmas perguntas.

// */

// const fs = require('fs')//constante requere algo
// console.log('Primeira saída.') //fazendo primeira saida
// fs.readFile('./text.txt',callback)//carregando documento logo em seguida de forma assincrona
// function callback(err, conteudo){
//     if(err) return console.error(err)
//     console.log(String(conteudo))
// }
// console.log('Segunda saída.') // segunda e terceira saida aparecem antes mesmo do carregamento do arquivo
// console.log('Terceira saída.')


// function soma(){//função sincrona pois não há função como argumento
//     const resultado = 1 + 1
//     if(resultado === 2)sucesso()
//     else erro()
// }

// function sucesso(){
//     console.log('Sucesso! a soma é 2!')
// }

// function erro(){
//     console.log('Erro! a soma não é 2')
// }
// soma()

//usando callback
// function somando(callback, callbackErro){
//     const resultado = 1 + 1
//     if(resultado === 2)callback()
//     else callbackErro()
// }

// somando(
//     () => {console.log('Sucesso')},
//     () => {console.log('Erro!')}
// )

//usando promise
const p = new Promise((resolve, reject)=>{
    const resultado = 1 +1
    if(resultado === 2) resolve('Sucesso! A soma é 2')
    else reject('Erro! A soma não deu 2')
})

p.then(
    (mensagem)=>{ console.log(mensagem)}
    ).catch(
        (mensagem)=> {console.log(mensagem)}
    )

// função com callback
// const melhorProgramador = 'João'
// function oMelhor(callback, callbackErro){
//     if(melhorProgramador == 'João Felix'){
//         callback({
//             nome: melhorProgramador,
//             mensagem:'humildimente o melhor!'
//         })
//     }else{
//         callbackErro({
//             mensagem01: 'Tá errado...',
//             mensagem02: melhorProgramador + ', sério?'
//         })
//     }
// }

// oMelhor((objeto)=>{
//     console.log(objeto.nome + 'é' + objeto.mensagem)
// }, (objeto)=>{
//     console.log(objeto.mensagem02 + objeto.mensagem01)
// })
//a promise acontece depois do callback - é mais lenta

//transformando em promise

const promise = new Promise((resolve, reject)=>{
    const melhorProgramador = 'João'
    if(melhorProgramador == 'João Felix') resolve({
        nome: melhorProgramador,
        mensagem: 'humildimente o melhor'
    })
    else reject({
        mensagem: melhorProgramador + ', sério? Tá errado...'
    })
})

promise.then(
    (mensagem)=>{ console.log(mensagem)}
    ).catch(
        (mensagem)=> {console.log(mensagem)}
    )