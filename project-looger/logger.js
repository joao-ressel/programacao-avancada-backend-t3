const EventEmmiter = require('events')//emitter é uma classe - não tem objeto - precisa ser instanciada
const fs = require('fs')
const path = require('path')

const emitter = new EventEmmiter()

// emitter.on('oi',()=>{
//     console.log('ouvi o oi...')
// })//vai esperar algo, ouve

// emitter.emit('oi')//emite algo, grita

emitter.on('oi',(mensagem)=>{

    // fs.appendFile(path, data, callbackErro) // './log.txt'
    fs.appendFile(path.join(__dirname, 'log.txt'), mensagem, (err)=>{
        if(err)throw err
    })
    console.log('Rodando...')
})

//emitter.emit('oi', 'ouvi o oi2...')

function log(mensagem){
    emitter.emit('oi', mensagem)
}
module.exports = log