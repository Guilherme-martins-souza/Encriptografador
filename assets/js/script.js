var imagemTexto = document.querySelector(".imagem_texto");
var imgTextoFinal = document.querySelector(".img_final");
var troca = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],["r","gay"]];
var houveTroca = 0;

function capturaTexto(){ // essa função vai capturar o texto que estiver
						 // dentro do textarea
	var textoinicial = document.querySelector(".texto_inicial");
	return textoinicial.value;
}

function btnEncrip(){
	var texto = capturaTexto();
	var textoFinal = document.querySelector(".texto_final");
	if(texto == ""){
		imgTextoFinal.classList.remove("ocultar");
		textoFinal.textContent = "";
	}else{
		ocultarImagem();
    	textoFinal.textContent = encriptar(texto);
	}

}

function btnDescrip(){
	var texto = capturaTexto();
	var textoFinal = document.querySelector(".texto_final");
	if(texto == null){
		imgTextoFinal.classList.remove("ocultar");
		textoFinal.textContent = "";
	}else{
		ocultarImagem();
    	textoFinal.textContent = desencriptar(texto);
	}
}

function ocultarImagem(){
	imgTextoFinal.classList.add("ocultar");
}

function encriptar(mensagem){
	var texto = mensagem.toLowerCase();
	var textoFinal ="";

	for(i = 0; i < texto.length; i++){
		for( j = 0; j < troca.length; j++){
			if(texto[i] == troca[j][0]){
				textoFinal = textoFinal + troca[j][1];
				houveTroca = 1;
			}
		}
		if(houveTroca == 0){
			textoFinal = textoFinal + texto[i];	
			houveTroca = 0;
		}

		houveTroca = 0;
	}
	return textoFinal;
}

function desencriptar(mensagem){
	var texto = mensagem.toLowerCase();
	for(let i= 0; i < troca.length; i++) {
		if(texto.includes(troca[i][1])){
			texto = texto.replaceAll(troca[i][1], troca[i][0]);	
		}
	}
	console.log(texto);
	return texto;
}

function btnCopiar(){
	var textoFinal = document.querySelector(".texto_final");
	textoFinal.select();
  	navigator.clipboard.writeText(textoFinal.value);
  	textoFinal.textContent = '';
	imgTextoFinal.classList.remove("ocultar");
}