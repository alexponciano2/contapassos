function contar() {
    let ini = document.querySelector('input#inicio')
    let fi = document.querySelector('input#fim')
    let pas = document.querySelector('input#passo')
    let res = document.getElementById('res')

    let inicio = Number(ini.value)
    let fim = Number(fi.value)
    let passo = Number(pas.value)

    if(passo <= 0){
        alert('Passo inválido, considerando Passo 1')
        passo = 1
    }


    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = `Impossível contar`
        alert('ERRO! Faltam dados')
    } else {
        res.innerHTML = `Contando: <br>`
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }

    }

}