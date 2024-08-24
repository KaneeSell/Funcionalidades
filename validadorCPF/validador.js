
function mascararCPF(){
    const cpf = document.getElementById('cpf')
    cpf.value = aplicarMascara(cpf)
}
function aplicarMascara(cpf){
    cpf = cpf.replace(/[^\d]+/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
function validar(){
    const cpf = document.getElementById('cpf').value
    const mensagem = validarCPF(cpf)
    document.getElementById('registro').innerHTML += `\nCPF: ${cpf}\nValidor?${mensagem}`

}
function validarCPF(cpf){
    cpf = aplicarMascara(cpf)
    let cpfaux = cpf
    let valido = true
    cpfaux = cpfaux.replace(/[.,-]/g, '')
    cpfaux = cpfaux.split('')
    Object.entries(cpfaux).forEach(e => {if(Number(e[1])){}else{if(e[1] == 0){}else{valido = false}}})
    if(cpfaux.length != 11){valido = false}
    let calculoCPF = []
    let calculoCPF2 = []
    let soma = 0
    let auxiliar = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    for(let i = 0; i< cpfaux.length;i++){cpfaux[i] = cpf[i] * 1;calculoCPF[i] = cpfaux[i];calculoCPF2[i] = cpfaux[i]}
    if(valido){
        for(let i = 0; i <= 8;i++){calculoCPF[i] = auxiliar[i+1] * calculoCPF[i]}
        for(let i = 0; i <= 8;i++){soma += calculoCPF[i]}
        soma = 11 - (soma % 11)
        if(soma >= 10){soma = 0}
        if(soma != cpfaux[9]){valido = false}
        for(let i = 0; i <= 9;i++){calculoCPF2[i] = auxiliar[i] * calculoCPF2[i]}
        soma = 0
        for(let i = 0; i <= 9;i++){soma += calculoCPF2[i]}
        soma = 11 - (soma % 11)
        if(soma >= 10){soma = 0}
        if(soma != cpfaux[10]){valido = false}
    }
    return valido? 'Sim':'Não'
    }