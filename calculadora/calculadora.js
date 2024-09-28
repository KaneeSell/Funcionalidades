window.onload = function(){
    localStorage.removeItem("num")
}
document.addEventListener('keydown', function(event){
    if(event.key === '1'){adicionar(1)}
    if(event.key === '2'){adicionar(2)}
    if(event.key === '3'){adicionar(3)}
    if(event.key === '4'){adicionar(4)}
    if(event.key === '5'){adicionar(5)}
    if(event.key === '6'){adicionar(6)}
    if(event.key === '7'){adicionar(7)}
    if(event.key === '8'){adicionar(8)}
    if(event.key === '9'){adicionar(9)}
    if(event.key === '0'){adicionar(0)}
    if(event.key === '.'){adicionar('.')}
    if(event.key === ','){adicionar('.')}
    if(event.key === '+'){soma()}
    if(event.key === '-'){subtracao()}
    if(event.key === '/'){divisao()}
    if(event.key === '*'){multiplicacao()}
    if(event.key === 'x'){multiplicacao()}
    if(event.key === 'X'){multiplicacao()}
    if(event.key === 'Backspace'){apagar()}
    if(event.key === 'Enter'){igual()}
    if(event.key === 'Delete'){apagar(event, 'all')}
});
const visor = document.getElementById("visor")
const visorLogNum = document.getElementById("visorLogNum")
const visorLogOP = document.getElementById("visorLogOP")
let verificaPonto = true
let verificaNegativo = true
function adicionar(num, e = ''){
    if(e != ''){e.preventDefault()}
    if(visor.value.length < 10){
        if(num == '.' && verificaPonto === true){
            if(visor.value.length < 1){
                visor.value = 0
            }
            verificaPonto = false
            visor.value += num
        } else if(num != '.'){
            visor.value += num
        }
    }
}
function apagar(e = '', clear){
    if(e != ''){e.preventDefault()}
    if(clear){
        visor.value = ''
        localStorage.removeItem("num")
        visorLogNum.value = 'Calculadora Limpa!'
        visorLogOP.value = ''
        verificaPonto = true
        verificaNegativo = true
    }
    else{
        visor.value = visor.value.slice(0, -1)
    }
}
function soma(e = ''){
    if(e != ''){e.preventDefault()}
    calcular('+')
}
function subtracao(e = ''){
    if(e != ''){e.preventDefault()}
    if(localStorage.getItem("num")){
        calcular('-')
    } else{
        verificaNegativo = false
        adicionar('-')
    }
}
function divisao(e = ''){
    if(e != ''){e.preventDefault()}
    calcular('÷')
}
function multiplicacao(e = ''){
    if(e != ''){e.preventDefault()}
    calcular('x')
}
function igual(e = ''){
    if(e != ''){e.preventDefault()}
    calcular('')
}
function calcular(op){
    if(visor.value){

        if(localStorage.getItem("num")){
            switch(visorLogOP.value){
                case '+':
                    const logSoma = Number(localStorage.getItem("num")) + Number(visor.value)
                    if(logSoma || logSoma == 0){
                    visorLogNum.value = Number(localStorage.getItem("num")) + Number(visor.value)
                    localStorage.removeItem("num")
                    localStorage.setItem("num", String(visorLogNum.value))
                    visorLogOP.value = op
                    visor.value = ''
                    verificaPonto = true
                    verificaNegativo = true
                    } else{
                        visorLogNum.value = 'Valor Inválido!'
                        localStorage.removeItem("num")
                        visorLogOP.value = ''
                        visor.value = ''
                        verificaPonto = true
                        verificaNegativo = true
                    }
                    break;
                case '-':
                    const logSubtracao = Number(localStorage.getItem("num")) - Number(visor.value)
                    if(logSubtracao || logSubtracao == 0){
                        visorLogNum.value = Number(localStorage.getItem("num")) - Number(visor.value)
                        localStorage.removeItem("num")
                        localStorage.setItem("num", String(visorLogNum.value))
                        visorLogOP.value = op
                        visor.value = ''
                        verificaPonto = true
                        verificaNegativo = true
                    } else{
                        visorLogNum.value = 'Valor Inválido!'
                        localStorage.removeItem("num")
                        visorLogOP.value = ''
                        visor.value = ''
                        verificaPonto = true
                        verificaNegativo = true
                    }
                    break;
                case '÷':
                    const logDividisao = Number(localStorage.getItem("num")) / Number(visor.value)
                    if(logDividisao){
                    visorLogNum.value = Number(localStorage.getItem("num")) / Number(visor.value)
                    localStorage.removeItem("num")
                    localStorage.setItem("num", String(visorLogNum.value))
                    visorLogOP.value = op
                    visor.value = ''
                    verificaPonto = true
                    verificaNegativo = true
                    } else{
                        visorLogNum.value = 'Valor Inválido!'
                        localStorage.removeItem("num")
                        visorLogOP.value = ''
                        visor.value = ''
                        verificaPonto = true
                        verificaNegativo = true
                    }
                    break;
                case 'x':
                    const logMultiplicacao = Number(localStorage.getItem("num")) * Number(visor.value)
                    if(logMultiplicacao){
                    visorLogNum.value = Number(localStorage.getItem("num")) * Number(visor.value)
                    localStorage.removeItem("num")
                    localStorage.setItem("num", String(visorLogNum.value))
                    visorLogOP.value = op
                    visor.value = ''
                    verificaPonto = true
                    verificaNegativo = true
                    } else{
                        visorLogNum.value = 'Valor Inválido!'
                        localStorage.removeItem("num")
                        visorLogOP.value = ''
                        visor.value = ''
                        verificaPonto = true
                        verificaNegativo = true
                    }
                    break;
                default:
                    if(visorLogOP.value){
                    } else{
                        visorLogOP.value = op
                    }
            }
        } else{
            localStorage.setItem("num", visor.value)
            visorLogNum.value = localStorage.getItem("num")
            visorLogOP.value = op
            visor.value = ''
            verificaPonto = true
            verificaNegativo = true
        }
    } else{
            visorLogOP.value = op
    }
    if(visorLogNum.value == NaN){
        visorLogNum.value = 'Valor Inválido!'
        localStorage.removeItem("num")
        visorLogOP.value = ''
        visor.value = ''
        verificaPonto = true
        verificaNegativo = true
    }
}