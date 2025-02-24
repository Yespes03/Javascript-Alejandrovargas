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
  