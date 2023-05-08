/* letVerdura = confirm ("Tenes verdura?");
letAgua = confirm ("Tenes agua?");
letPollo = confirm ("Tenes pollo?");
letCarne = confirm ("Tenes carne?");
letCondimentos= confirm ("Tenes condimentos?");
letCaldo= confirm ("Tenes Caldo?");
 */

const Verificacion1=document.querySelector("#verificacion-verdura");
const Verificacion2=document.querySelector("#verificacion-agua");
const Verificacion3=document.querySelector("#verificacion-pollo");
const Verificacion4=document.querySelector("#verificacion-carne");
const Verificacion5=document.querySelector("#verificacion-condimentos");
const Verificacion6=document.querySelector("#verificacion-caldo");
const pResultado= document.querySelector("#resultado");


letVerdura = "ingrediente1 def"
letAgua = "ingrediente2 def"
letPollo = "ingrediente3 def"
letCarne = "ingrediente4 def"
letCondimentos= "ingrediente5 def"
letCaldo= "ingrediente6 def"

function verificar(){

    letVerdura=Verificacion1.value;
    letAgua=Verificacion2.value;
    letPollo=Verificacion3.value;
    letCarne=Verificacion4.value;
    letCondimentos=Verificacion5.value;
    letCaldo=Verificacion6.value;

    if (((letVerdura == "Y" && letAgua == "Y")&& (letPollo == "Y"||letCarne == "Y")) && (letCondimentos == "Y"||letCaldo == "Y")) {
        /* document.write ("¡Podemos preparar la sopa!");   */ 
        pResultado.innerHTML="¡Podemos preparar la sopa!";
    } else {
       /*  document.write (" ¡No podemos preparar la sopa: Faltan Ingredientes!"); */
       pResultado.innerHTML=" ¡No podemos preparar la sopa: Faltan Ingredientes!";
    }}
