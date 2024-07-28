function exec(){
    var text = window.document.getElementById('mng')
    var img = window.document.getElementById('img')
    var hora = 12
    text.innerHTML = `Ola`
    if(hora > 23){
        text.innerHTML = `Erro, digite um horario valido.`
    }else if(hora<=23 && hora >=18){
        text.innerHTML = `Está de Noite`
        img.src = 'Imagens/noitee.png'
        document.body.style.background = '#2C2640' 

    }else if(hora < 18 && hora > 12){
        text.innerHTML = `Está de tarde`
        img.src = 'Imagens/tardee.png'
        document.body.style.background = '#efa48b'

    }else if(hora <= 12 && hora >=6){
        text.innerHTML = `Está de Dia`
        img.src = 'Imagens/dia.png'
        document.body.style.background = '#83bcff'

    }else if(hora >= 0 && hora < 5){
        text.innerHTML = `Está de Noite`
        img.src = 'Imagens/noitee.png'
        document.body.style.background = '#2C2640' 

    }
}