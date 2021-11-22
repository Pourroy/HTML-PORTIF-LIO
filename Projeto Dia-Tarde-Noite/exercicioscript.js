function carregar() {
var msg = document.querySelector('div#msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`
if (hora >= 0 && hora < 12 ) {
    //Bom Dia!!
    img.src = 'manhaimg.png'
    document.body.style.background = '#ecc48e'
} else if(hora >= 12 && hora <18) {
    img.src = 'tardeimg.png'
    document.body.style.background = '#fd6e3c'
    //Boa Tarde!!
} else {
    img.src = 'noiteimg.png'
    document.body.style.background = '#2c5090'
    //Boa Noite
}
}