function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById("ano_de_nascimento")
    var idade = ano - Number(nascimento.value)
    if (Number(nascimento.value)<0){
        window.alert("Ano de Nascimento inválido! Tente novamente.")
        location.reload()
    }
    else if(Number(idade)<=0){
        window.alert("ERRO! Tente novamente.")
        location.reload()
    }
    else{
        var sexo = document.getElementsByName("sexo")
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if(sexo[0].checked){
            var sexo = "homem"
            if(Number(idade)<=13){
                img.setAttribute("src","foto-crianca-m.png")
            }
            if(Number(idade)>13 && Number(idade)<30){
                img.setAttribute("src","foto-jovem-m.png")
            }
            if(Number(idade)>=30 && Number(idade)<65){
                img.setAttribute("src","foto-adulto-m.png")
            }
            if(Number(idade)>=65){
                img.setAttribute("src","foto-idoso-m.png")
            }
        }
        else if (sexo[1].checked){
            var sexo = "mulher"
            if(Number(idade)<=13){
                img.setAttribute("src","foto-crianca-f.png")
            }
            if(Number(idade)>13 && Number(idade)<30){
                img.setAttribute("src","foto-jovem-f.png")
            }
            if(Number(idade)>=30 && Number(idade)<65){
                img.setAttribute("src","foto-adulto-f.png")
            }
            if(Number(idade)>=65){
                img.setAttribute("src","foto-idoso-f.png")
            }
        }

        else{
            window.alert("Sexo não definido. Tente novamente.")
            location.reload()
        }
        var res = document.querySelector("div#res")
        res.style.textAlign = "center"
        res.style.padding = "15px"
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
        
        
    }
}