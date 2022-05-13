const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnCripto() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let codificar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    stringEncriptada = stringEncriptada.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");

    for (let i = 0; i < codificar.length; i++) {
        if (stringEncriptada.includes(codificar[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(codificar[i][0], codificar[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDescripto() {
    const textoDescriptado = descriptar(inputTexto.value);
    mensagem.value = textoDescriptado;
    mensagem.style.backgroundImage = "none";
}

function descriptar(stringDescriptada) {
    let descodificar = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    
    for (let i = 0; i < descodificar.length; i++) {
        if(stringDescriptada.includes(descodificar[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(descodificar[i][0], descodificar[i][1]);
        }
    }
    return stringDescriptada;
}

function btnCopiar() {
    const textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    window.location.reload();
} 



