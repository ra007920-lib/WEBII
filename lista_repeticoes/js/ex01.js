const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const fruta = document.querySelector("#inFruta").value
    const numero = Number(document.querySelector("#inNumero").value)

    let resultato =""

    for (let i = 0 ; i < numero; i ++){
        resultato += fruta

        if ( i <numero - 1){
            resultato += " * "
        }
    }

    resp.innerText = resultato


})

frm.addEventListener("reset" , ()=>{
    resp.innerText = ""
})