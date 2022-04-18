
//JAVA . (COMENTARIO UNA LINEA)

//alert("Hola mundo")

/*Comentario
de varias
lineas*/

let alumno = ""//creo la variable 
let nota = 9

const entidad = "Gobierno ciudad"
//entidad = "nacion"//aparece error
 
alumno = "fede"//le cambio el contenido

alumno = "emiliano"

console.log("el nombre del alumno es " + alumno + " y su nota es " + nota)// lo imprimo en pantalla

/*BUENAS PRACTICAS NOMBRE VARIABLES:

let alumno >> Todo minúscula
let nombreApellido >> camelCase
let User >> Primera letra mayúscula
let _usuario 
let $user
let nombre_apellido >> snake case
let NombreApellido >> Pascal Case

LOS NO

let 1er nombre =
let nombre-apellido
let var break this (usar palabras reservadas)

TIPO DE VARIABLES

STRING
*/
let str1 = "JUAN"
let str2 = 'PEDRO'
let str3 = `RAMIRO`// backtick

console.log(str1+" y "+str2)

//o 

let str4 = str1 + " y " + str2
console.log(str4)

//o

let str5 = `${str1} y ${str2}`
console.log (str5)

//NUMBER - NO HAY CLASIFICACION. TODO ES NUMBER

let num1 = parseInt (prompt("mete el primer numero"))
let num2 = parseInt (prompt("mete el segundo numero"))

//operaciones basicas

console.log(num1+num2)
// ahora una manera mas correcta:
let suma = num1+num2
let resta = num1-num2
let mult = num1*num2


console.log("La suma es: "+suma)
console.log("La resta es: "+resta)
console.log("La multiplicación es: "+mult)








