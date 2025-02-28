/*let nombre = "Alejandro"
let edad = "19"
let ciudad = "Garzón"
console.log("Hola, mi nombre es "+ nombre +", tengo "+ edad +" años y vivo en "+ ciudad +".");*/

/* crea una variable llamada precio y asignale un valor decimal. luego, crea otra variable llamada cantidad y asignale un valor entero. muestra el tipo de dato de cada variable en la consola.*/
/*
let precio = 19.99;
let cantidad = 5;
console.log(typeof precio);//Imprime en la consola
document.write(typeof cantidad);//Imprime en la consola
alert(typeof cantidad);// Imprime en la consola; 



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
}


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

document.write('¡Despegue! 🚀');


//DO WHILE

/*Imprimir 5 edades de diferentes personas y determinar si son mayores de edad

let numero = parseInt(prompt("ingrese el número de la tabla de multiplicar que deseas ver"))
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + "x" + i + "=" + resultado, "<br>");
} 

//1. Imprime por consola un mensaje si el usuario y la contraseña coinciden con unos establecidos

//2. Verifica si un numero es positivo, negativo o cree e imprime un mensaje

//3. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años les faltan

//4. Usa el operador ternario para asignar valor "adulto" o "menor" a una variable dependiendo de la edad.
*/


  //SWITCH
  // Ejercicio 1: realezar un programa que determine que dia de la semana corresponde hoy, utilizando la funcion promt.
/*
  let dia = prompt("Ingrese el día de la semana");

  switch (dia) {
      case "lunes":
          console.log("Con chacón");
          break;
      case "Martes":
          console.log("zzzzzzz");
          break;
      case "Miercoles":
          console.log("con chacolin");
          break;
      case "Jueves":
          console.log("Más aburrido que 10");
          break;
      case "Viernes":
          console.log("Voley");
          break;
      case "Sábado":
          console.log("Neiva");
          break;
      case "Domingo":
          console.log("Dormir");
          break;
      default:
          console.log("Día no reconocido");
  }
*/    

// 1. Programa que dada la edad de una persona indique si es mayor o menor de edad. Se considera mayor de edad a partir de los 18 años.
/*
let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18) {
    alert(nombre + " eres mayor de edad.");
}   else {
    alert(nombre + " eres menor de edad.");
}
*/
// 3. Dado dos números A y B, determinar si A es mayor, menor o igual que B
/*
let numeroA = parseInt(prompt("Ingrese el número A"));
let numeroB = parseInt(prompt("Ingrese el número B"));
if (numeroA > numeroB) {
    alert("El número A es mayor que el número B");
}
else if (numeroA < numeroB) {
    alert("El número A es menor que el número B");
}
else {
    alert("El número A es igual al número B");
}
*/

/*  5. Dado el peso de una persona:
a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de
Peso;
b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso
promedio;
c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”
*/
/*
let peso = parseInt(prompt("Ingrese su peso"));
switch (true) { 
    case peso <= 40:            
        alert("Eres una persona baja de peso");
        break;
    case peso >= 41 && peso <= 70:
        alert("Eres una persona con peso promedio");
        break;
    case peso > 71:
        alert("Eres una persona con sobrepeso");
        break;
    default:
        alert("No es un peso válido");
        break;
        }
*/

// 7. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál será la cantidad que pagara una persona por su compra?

/*
let compra = parseInt(prompt("Ingrese el valor de la compra"));

switch (true) {
    case compra > 1000:
        let descuento = compra * 0.20;
        let total = compra - descuento;
        alert("El total a pagar es: $" + total);
        break;
    case compra <= 1000:
        let descuento2 = compra * 0.05;
        let total2 = compra - descuento2;
        alert("El total a pagar es: $" + total2);
        break;
    default:
        alert("No es un valor válido");
        break;
}
*/
// 9. Programa que lea los nombres y edades de dos personas e imprima cuál de ellas tiene más edad.

/*

let nombre1 = prompt("Ingrese el nombre de la primera persona");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona"));
let nombre2 = prompt("Ingrese el nombre de la segunda persona");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"));
if (edad1 > edad2) {
    alert(nombre1 + " es mayor que " + nombre2);
}
else if (edad1 < edad2) {
    alert(nombre2 + " es mayor que " + nombre1);
}
else {
    alert("Ambas personas tienen la misma edad");
}
*/

// 11. Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.

/*
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
switch (true) {
    case numero1 == numero2:
        let multiplicacion = numero1 * numero2;
        alert("El resultado de la multiplicación es: " + multiplicacion);
        break;
    case numero1 > numero2:
        let resta = numero1 - numero2;
        alert("El resultado de la resta es: " + resta);
        break;
    default:
        let suma = numero1 + numero2;
        alert("El resultado de la suma es: " + suma);
        break;
}
*/
// 13.  13.Escribe un programa que determine si un número ingresado por el usuario es par o impar.

/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero % 2 == 0) {
    alert("El número es par");
}
else {
    alert("El número es impar");
}
*/
// 15. Crea un programa que solicite un número y verifique si es positivo, negativo o igual a cero.

/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero > 0) {
    alert("El número es positivo");
}
else if (numero < 0) {
    alert("El número es negativo");
}
else {
    alert("El número es igual a cero");
}
*/
// 17.Escribe un programa que permita al usuario seleccionar una figura geométrica (triángulo y cuadrado) y luego calcule el área de esa figura ingresando los datos necesarios para cada caso.*
/*
let figura = prompt("Ingrese la figura geométrica (triángulo o cuadrado)");
switch (figura) {
    case "triángulo":
        let base = parseInt(prompt("Ingrese la base del triángulo"));
        let altura = parseInt(prompt("Ingrese la altura del triángulo"));
        let areaTriangulo = (base * altura) / 2;
        alert("El área del triángulo es: " + areaTriangulo);
        break;
    case "cuadrado":
        let lado = parseInt(prompt("Ingrese el lado del cuadrado"));
        let areaCuadrado = lado * lado;
        alert("El área del cuadrado es: " + areaCuadrado);
        break;
    default:
        alert("No es una figura válida");
        break;
}
*/
// 19.Diseña un programa que solicite el nombre de un usuario y su contraseña. Si el nombre es "admin" y la contraseña es "12345", muestra un mensaje de acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.
/*
let usuario = "admin";
let contraseña = "J12345";
let usuarioIngresado = prompt("Ingrese su usuario");
let contraseñaIngresada = prompt("Ingrese su contraseña");  
if (usuarioIngresado == usuario && contraseñaIngresada == contraseña) {
    alert("Acceso concedido");
}
else {
    alert("Acceso denegado");
}
*/