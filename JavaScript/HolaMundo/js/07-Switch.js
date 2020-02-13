'use strict'

//Switch
var edad=18;
var imprime="";
switch(edad){
	case 18:
		imprime="mayor de edad";
	break;
	case 25:
		imprime="adulto";
	break;
	case 70:
		imprime="anciano";
	break;
	default:
		imprime="no se sabe";
	break;
}
console.log(imprime);
