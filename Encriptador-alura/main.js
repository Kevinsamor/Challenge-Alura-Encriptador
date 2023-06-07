const textArea = document.querySelector(".area-texto")
const mensaje = document.querySelector(".mensaje")
/*Uso de arreglos multidimensionales, es decir arreglos de arreglo
*/

/*
La letra e es convertida para "enter"
La letra i es convertida para "imes"
La letra a es convertida para "ai"
La letra o es convertida para "ober"
La letra u es convertida para "ufat"*/

function btnEncriptar (){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundimage = none
}

function encriptar (stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptado (){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundimage = none
}

function desencriptar (stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringEncriptado
}



