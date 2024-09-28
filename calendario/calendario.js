window.onload = function(){reload()}
const main = document.getElementById('painel')
const data = document.getElementById('dataDeHoje')
const calendario = document.getElementById('calendario')
//Carregar Elementos
function reload(){
    const calendarioLoaded = calendarioLoad()
    data.innerHTML = dataLoad()
    calendario.innerHTML = calendarioLoaded.seletor()
    calendario.innerHTML = calendarioLoaded.calendario()
}
//Data
function dataLoad(){
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const fullData = `${dia}/${mes < 10? `0${mes}`:mes}/${ano}`
    return `<h3 class="data">${fullData}</h3>`
}
//Calendario
function calendarioLoad(){
    const seletor = `<button onclick="segunda"></button>`
    const inicio = `<div class="calendario">`
    const tarefas = `<p class="tarefas">Tarefas</p>`
    const fim = `</div>`
    return {
        seletor(){return``},
        calendario(){return`${inicio}
    ${tarefas}
    ${fim}`}
    }
}