const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const numero = Number(document.querySelector("#inNumero").value)

    let soma = 0
    let divisores = ""

    for (let i = 1; i < numero; i++){

        if (numero % i == 0){
            soma = soma + i
            divisores = divisores + i + " "
        }
    }

    resp1.innerText = "Divisores: " + divisores + " Soma: " + soma

    if (soma == numero){
        resp2.innerText = numero + " é um número perfeito"
    }else{
        resp2.innerText = numero + " não é um número perfeito"
    }
})

frm.addEventListener("reset", ()=>{
    resp1.innerText = ""
    resp2.innerText = ""
})