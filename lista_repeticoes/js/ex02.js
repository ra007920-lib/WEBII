const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const chinchilas = Number(document.querySelector("#inChinchilas").value)
    const anos = Number(document.querySelector("#inAnos").value)

    let quantidade = chinchilas
    let resultado = ""

    for (let i = 1; i <= anos; i++){
        resultado += i + " ° Ano: " + quantidade +  "  Chinchilas \n  "

        quantidade = quantidade * 3
    }

    resp.innerText = resultado

})  

frm.addEventListener("reset", ()=>{
    resp.innerText = ""
})
