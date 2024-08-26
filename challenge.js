const textArea = document.querySelector(".texto_ingresado");
//const mensaje = document.querySelector(".mensaje_resultado_p");
const seccionDerecha = document.querySelector(".Derecha");

// Función eliminar acento y caracteres especiales
function eliminarAcentos(texto) {
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^a-z\s]/g, ""); 
    return texto
}

// Validar la entrada del usuario en tiempo real
textArea.addEventListener("input", function() {
    const textoLimpio = eliminarAcentos(textArea.value);
    textArea.value = textoLimpio;
});

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat" 

// Función para encriptar el texto
function btnEncriptar(){
    let textoSinAcentos = eliminarAcentos(textArea.value)
    const textoEncriptado = encriptar(textoSinAcentos);
    //mensaje.textContent = textoEncriptado;
    cambiarDiseno(textoEncriptado);
}

// Función para encriptar el texto
function btnDesencriptar(){
    let textoSinAcentos = eliminarAcentos(textArea.value)
    const textoDesencriptado = desencriptar(textArea.value);
    //mensaje.textContent = textoEncriptado;
    cambiarDiseno(textoDesencriptado);
}

// Encriptación
function encriptar(stringEncriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i=0 ; i<matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]); 
        }
    }
    return stringEncriptado;
}

// Desencriptación
function desencriptar(stringDesencriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i=0 ; i<matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]); 
        }
    }
    return stringDesencriptado;
}

// Cambio de diseño 
function cambiarDiseno(textoResultado){
    seccionDerecha.innerHTML = `
        <div class="mensaje_resultado_2"> 
           <p> ${textoResultado}</p>
        </div>
        <button class="copiar">Copiar</button>
    `;
    document.querySelector(".copiar").addEventListener("click", function() {
        copiarTexto(textoResultado);
    });
}

// Función para copiar el texto
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto", err);
    });
}