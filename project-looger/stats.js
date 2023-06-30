//nao tem programação assincrona
const os = require('os')

//CHAMANDO FUNÇÃO COMO ATRIBUTO DE OUTRA
//console.log(os.platform())

//desestruturação pra nao usar sempre (os.freemem) - serve também pra metodo
const {freemem, totalmem} = os

// console.log(`Memória liivre: ${parseInt(freemem()/1024/1024) }Mb
// Total de memória: ${parseInt(totalmem()/1024/1024)} Mb`)

// const total = parseInt(totalmem()/1024/1024)
// const free = parseInt(freemem()/1024/1024)
// //qual porcentagem esta sendo utilizada
// const usage = 100 - (parseInt((free/total)*100))
// // console.log(usage,'%')

// const stats = {
//     memoriaTotal: `${total} MB`,
//     memoriaLivre:` ${free} MB`,
//     memoriaUsada: `${usage}%`
// }
// console.log('++++++++ MEMORY STATS ++++++++')
// console.table(stats)

//de forma assincrona agora


//qual porcentagem esta sendo utilizada
const log = require('./logger')
setInterval(()=>{
  
    const total = parseInt(totalmem()/1024/1024)
    const free = parseInt(freemem()/1024/1024)
    const usage = 100 - (parseInt((free/total)*100))

    const stats = {
        memoriaTotal: `${total} MB`,
        memoriaLivre:` ${free} MB`,
        memoriaUsada: `${usage}%`
    }
    console.clear()
    console.log('++++++++ MEMORY STATS ++++++++')
    console.table(stats)

    log(`${JSON.stringify(stats)}` + '\n')


},1000)