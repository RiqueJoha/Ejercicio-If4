letVerdura = confirm ("Tenes verdura?");
letAgua = confirm ("Tenes agua?");
letPollo = confirm ("Tenes pollo?");
letCarne = confirm ("Tenes carne?");
letCondimentos= confirm ("Tenes condimentos?");
letCaldo= confirm ("Tenes Caldo?");

if (((letVerdura && letAgua)&& (letPollo||letCarne)) && (letCondimentos||letCaldo)) {
    document.write ("¡Podemos preparar la sopa!");   
} else {
    document.write (" ¡No podemos preparar la sopa: Faltan Ingredientes!");
}