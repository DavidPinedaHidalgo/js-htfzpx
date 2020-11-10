var frutas = ["Manzana", "Banana"];
console.log(frutas.length);
var ultimo = frutas[frutas.length - 1];
console.log(ultimo);
console.log(frutas[0]);

frutas.forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
});

frutas.push("Naranja", "Pera");
frutas.forEach(function(elemento, indice, array) {
  console.log(elemento, indice, array);
});

console.log("--------------------------------------------------------");

for (var paso = 0; paso < 3  ; paso++) {
  console.log("Dando un paso al Norte");
}

var x = 0;
var n = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(x);

(function volcar(obj, obj_nombre) {
  var resultado = "";
  for (var i in obj) {
    resultado += obj_nombre + "." + i + " = " + obj[i] + "<br>";
  }
  resultado += "<hr>";
  return resultado;
  console.log(resultado);
})();
console.log("--------------------------------------------------------")
var myCar= {
make: "Ford",
year:1872};
console.log(myCar);

