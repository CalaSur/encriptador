const textarea=document.querySelector(".texto");
const resultado=document.querySelector(".textrespuesta");
const div=document.querySelector(".respuestaimagen")
const divrespuesta=document.querySelector(".respuestatexto")

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"  hola  hoberlai
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function copy() {
  let copyText = document.querySelector(".textrespuesta");
  copyText.select();
  document.execCommand("copy");
  
  alert("Copiado");
}



function btnEncriptar(){
  const textoEncriptado=encriptar(textarea.value)
  divrespuesta.style.display="block"
  resultado.value=textoEncriptado
  textarea.value="";
  div.style.display="none";

}
function encriptar(stringEncriptado){
  let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
  stringEncriptado=stringEncriptado.toLowerCase()

  for(let i=0;i<matrizCodigo.length;i++){
      if(stringEncriptado.includes(matrizCodigo[i][0])){
          stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
      }
  }
  return stringEncriptado
}

function btnDesencriptar(){
  const textoDesencriptado=desEncriptar(textarea.value)
  divrespuesta.style.display="block"
  resultado.value=textoDesencriptado
  textarea.value="";
  div.style.display="none";

}
function desEncriptar(stringDesencriptado){
  let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
  stringDesencriptado=stringDesencriptado.toLowerCase()

  for(let i=0;i<matrizCodigo.length;i++){
      if(stringDesencriptado.includes(matrizCodigo[i][1])){
          stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
      }
  }
  return stringDesencriptado
}



