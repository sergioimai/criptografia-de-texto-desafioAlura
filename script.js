//As "chaves" de criptografia que utilizaremos são:
//`A letra "e" é convertida para "enter"`
//`A letra "i" é convertida para "imes"`
//`A letra "a" é convertida para "ai"`
//`A letra "o" é convertida para "ober"`
//`A letra "u" é convertida para "ufat"` 

function criptografia() {
    var textoDigitado = document.getElementById("cripto").value;
    var textoResultado = document.getElementById("descripto");

    if (textoDigitado.trim() === "") {
        var popup = document.getElementById("popUp");
        popup.classList.toggle("show");
    } else {
        
        var textoCriptografado = textoDigitado.toLowerCase();
        var resultado1 = textoCriptografado.replace(/e/g, "enter");
        var resultado2 = resultado1.replace(/i/g, "imes");
        var resultado3 = resultado2.replace(/a/g, "ai");
        var resultado4 = resultado3.replace(/u/g, "ufat");
        var resultado5 = resultado4.replace(/o/g, "ober");

        textoResultado.value = resultado5;
        } 
    }

function descriptografia() {
    var textoDigitado = document.getElementById("cripto").value;
    var textoResultado = document.getElementById("descripto");

    if (textoDigitado.trim() === "") {
        var popup = document.getElementById("popUp");
        popup.classList.toggle("show");
    } else {
        var textoDescriptografado = textoDigitado;
        var resultado1 = textoDescriptografado.replace(/enter/g, "e");
        var resultado2 = resultado1.replace(/imes/g, "i");
        var resultado3 = resultado2.replace(/ai/g, "a");
        var resultado4 = resultado3.replace(/ufat/g, "u");
        var resultado5 = resultado4.replace(/ober/g, "o");

        textoResultado.value = resultado5;
    }
}    

function copiar() {
    var textoCopiar = document.getElementById("descripto");
    textoCopiar.select();
    navigator.clipboard.writeText(textoCopiar.value);

    window.location.reload();
}