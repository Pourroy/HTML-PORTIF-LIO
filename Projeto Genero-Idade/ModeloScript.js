
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('A data é invalida, preencha corretamente o campo e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background ="#43abf4"
            if (idade >=0 && idade <2){
                //BEBE
                img.setAttribute('src', 'bebem.png')
            } else if (idade >=2 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'criançam.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultom.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosom.png')
            }
                
        } else if(fsex[1].checked){
            genero = 'Mulher'
            document.body.style.background ="#f66eeb"
            if (idade >=0 && idade <2){
                //BEBE
                img.setAttribute('src', 'bebef.png')
            } else if (idade >=2 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'criançaf.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 50) {
                //ADULTA
                img.setAttribute('src', 'adultaf.png')

            } else {
                //IDOSA
                img.setAttribute('src', 'idosaf.png')
            }
        }
        res.innerHTML = `Você é um(a) ${genero} com ${idade} de idade!!`
        res.appendChild(img)
    }
}