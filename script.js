function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById("txtano") // "ano" que veio do formulário
    var res = document.querySelector("div#res") // div que irá exibir o resultado
    if (formano.value.length == 0 || Number(formano.value) > ano) {
        window.alert("[Erro!] Verifique os dados e tente novamente!")
    } else {
        var formsex = document.getElementsByName("radsex")
        var idade = ano - Number(formano.value) // o Number() é utilizado para se ter a conversão dnão o número é lido como uma string
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (formsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute("src", "assets/img/criançamenino.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "assets/img/jovemhomem.jpg")
                //Jovem
            } else if (idade < 50) {
                img.setAttribute("src", "assets/img/homem.jpg")
                //Adulto
            } else {
                img.setAttribute("src", "assets/img/senhor.jpg")
                //Idoso
            }
        } else {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                img.setAttribute("src", "assets/img/criançamenina.jpg")
                //Criança
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "assets/img/jovemmulher.jpg")
            } else if (idade < 50) {
                //Adulta
                img.setAttribute("src", "assets/img/mulher.jpg")
            } else {
                //Idosa
                img.setAttribute("src", "assets/img/senhora.jpg")
            }
        }
        res.style.textAlign = "center"
        res.style.imgAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}