let nombre = "Alejandro"
let edad = "19"
let ciudad = "Garzón"
console.log("Hola, mi nombre es "+ nombre +", tengo "+ edad +" años y vivo en "+ ciudad +".");

/* crea una variable llamada precio y asignale un valor decimal. luego, crea otra variable llamada cantidad y asignale un valor entero. muestra el tipo de dato de cada variable en la consola.*/

let precio = 19.99;
let cantidad = 5;
console.log(typeof precio);//Imprime en la consola
document.write(typeof cantidad);//Imprime en la consola
alert(typeof cantidad);// Imprime en la consola 



        function calcularDescuento() {
            let compra = parseFloat(prompt("Ingrese el total de la compra:"));
            let total = compra * 0.75;
            alert("Total a pagar con descuento: " + total);
        }

        function calcularInteres() {
            let capital = parseFloat(prompt("Ingrese el capital a invertir:"));
            let ganancia = capital * 1.02;
            alert("Dinero después de un mes: " + ganancia);
        }

        function calcularCalificacionFinal() {
            let parcial1 = parseFloat(prompt("Ingrese la primera calificación parcial:"));
            let parcial2 = parseFloat(prompt("Ingrese la segunda calificación parcial:"));
            let parcial3 = parseFloat(prompt("Ingrese la tercera calificación parcial:"));
            let examen = parseFloat(prompt("Ingrese la calificación del examen final:"));
            let trabajo = parseFloat(prompt("Ingrese la calificación del trabajo final:"));
            let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
            let final = (promedioParciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);
            alert("Calificación final: " + final);
        }

        function calcularPrecioVenta() {
            let costo = parseFloat(prompt("Ingrese el costo del artículo:"));
            let precioVenta = costo * 1.30;
            alert("Precio de venta: " + precioVenta);
        }

        function calcularTarifaTaxi() {
            let km = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
            let min = parseFloat(prompt("Ingrese la cantidad de minutos del viaje:"));
            let tarifa = (km * 15000) + (min * 2000);
            alert("Total a pagar: " + tarifa);
        }

        function calcularCuadrados() {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            let num3 = parseFloat(prompt("Ingrese el tercer número:"));
            alert("Cuadrados: " + (num1**2) + ", " + (num2**2) + ", " + (num3**2));
        }

        function calcularPresupuesto() {
            let presupuesto = parseFloat(prompt("Ingrese el presupuesto total del hospital:"));
            alert("Ginecología: " + (presupuesto * 0.40) + "\nTraumatología: " + (presupuesto * 0.30) + "\nPediatría: " + (presupuesto * 0.30));
        }

        function calcularInversion() {
            let inv1 = parseFloat(prompt("Ingrese la inversión de la primera persona:"));
            let inv2 = parseFloat(prompt("Ingrese la inversión de la segunda persona:"));
            let inv3 = parseFloat(prompt("Ingrese la inversión de la tercera persona:"));
            let total = inv1 + inv2 + inv3;
            alert("Porcentajes:\nPersona 1: " + ((inv1 / total) * 100) + "%\nPersona 2: " + ((inv2 / total) * 100) + "%\nPersona 3: " + ((inv3 / total) * 100) + "%");
        }

        function calculadora() {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            let operacion = prompt("Ingrese la operación (+, -, *, /):");
            let resultado;
            switch (operacion) {
                case '+': resultado = num1 + num2; break;
                case '-': resultado = num1 - num2; break;
                case '*': resultado = num1 * num2; break;
                case '/': resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero"; break;
                default: resultado = "Operación no válida";
            }
            alert("Resultado: " + resultado);
        }
  
        //ESTRUCTURA DE CONTROLS 

//EJEMPLO 1 - 

/*El usuario digite nombre y edad con la siguiente estructura de verificacion

1 a 18 años es joven
19 a 40 años es adulto 
41 a 60 años es maduro
61 en adelante es pencionado




let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

if (edad<=18 ){
    alert("Hola: " + nombre + " eres joven");
}
 else if (edad <40) {
    alert("Hola: " + nombre + " eres adulto"); 
} else if (edad<=60) {
    alert("Hola: " + nombre + " eres maduro"); 
} else {
    alert("Hola: " + nombre + " eres pencionado");
}*/


/*CICLO WHILE

//DECLARAR VARIABLE NUMERICA QUE MUESTRE LA CUENTA REGRESIVA A LLEGAR A 0

// iniciamos la variable fuera del bucle
let cuentaAtras = prompt("Ingrese su numero")

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  document.write(cuentaAtras + '<br>')
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

document.write('¡Despegue! 🚀')
*/

//DO WHILE

/*Imprimir 5 edades de diferentes personas y determinar si son mayores de edad*/

let numero = parseInt(prompt("ingrese el número de la tabla de multiplicar que deseas ver"))
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + "x" + i + "=" + resultado, "<br>");
}