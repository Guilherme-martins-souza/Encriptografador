var imagemTexto = document.querySelector(".imagem_texto");
var imgTextoFinal = document.querySelector(".img_final");
var troca = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],["r","gay"]];
var houveTroca = 0;

function capturaTexto(){ // essa função vai capturar o texto que estiver
						 // dentro do textarea
	let textoinicial = document.querySelector(".texto_inicial");
	return textoinicial.value;
}

function btnEncrip(){
	let texto = capturaTexto();
	let textoFinal = document.querySelector(".texto_final");
	if(texto == ""){
		imgTextoFinal.classList.remove("ocultar");
		textoFinal.textContent = "";
	}else{
		ocultarImagem();
    	textoFinal.textContent = encriptar(texto);
	}

}

function btnDescrip(){
	let texto = capturaTexto();
	let textoFinal = document.querySelector(".texto_final");
	if(texto == null){
		imgTextoFinal.classList.remove("ocultar");
		textoFinal.textContent = "";
	}else{
		ocultarImagem();
    	textoFinal.textContent = desencriptar(texto);
	}
}

function ocultarImagem(){
	let textoFinal = document.querySelector(".texto_final");
	imgTextoFinal.classList.add("ocultar");
	textoFinal.classList.add("texto_final_ext");
}

function encriptar(mensagem){
	let texto = mensagem.toLowerCase();
	let textoFinal ="";

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
	let texto = mensagem.toLowerCase();
	for(let i= 0; i < troca.length; i++) {
		if(texto.includes(troca[i][1])){
			texto = texto.replaceAll(troca[i][1], troca[i][0]);	
		}
	}
	console.log(texto);
	return texto;
}

function btnCopiar(){
	let textoFinal = document.querySelector(".texto_final");
	textoFinal.select();
  	navigator.clipboard.writeText(textoFinal.value);
  	textoFinal.textContent = '';
	imgTextoFinal.classList.remove("ocultar");
	textoFinal.classList.remove("texto_final_ext")
}