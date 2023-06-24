setTimeout(mostrarData, 5000);
// setTimeout(mostrarData, 5000);
// setTimeout(mostrarData, 5000);
setInterval(mostrarData, 5000);
function mostrarData(){
    data = new Date
    console.log("Horas:" + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
}
//no setTimeout ele imprime 3 de uma vez após esperar um tempo
// setInterval ele chama os 3 justos apos um intervalo de 5 segundos sem parar