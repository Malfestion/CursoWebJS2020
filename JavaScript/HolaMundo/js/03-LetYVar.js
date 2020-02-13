'use strict'
//PRUEBA CON VAR
var numero=40;
console.log(numero);
if(true){
	var numero=50
	console.log(numero);
}
console.log(numero);

//PRUEBA CON LET
let texto="Alejandro Duarte";
console.log(texto);
if(true){
	let texto="Karen Rodriguez"//crea una variable local dentro del if.
	console.log(texto);
}
console.log(texto);