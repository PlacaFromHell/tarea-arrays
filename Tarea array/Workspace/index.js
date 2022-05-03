let condicionBucle = "sí";
let i = 0;

const contadorAlert = function(i) { return i + 1 };

const lista = [];

alert("El siguiente programa crea una lista de artículos. A continuación introduzca el primer artículo:");

while(condicionBucle=="sí") {
    lista[i] = prompt("Artículo Nº" + contadorAlert(i));
    i++;

    do { //validación
        condicionBucle = prompt("¿Vas a añadir otro elemento? (sí, no):");
        condicionBucle = condicionBucle.toLowerCase();
    }
    while (condicionBucle!="sí" && condicionBucle!="no")

}

lista.forEach(lista => console.log(lista));