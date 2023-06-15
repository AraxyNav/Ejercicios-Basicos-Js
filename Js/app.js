//Ejercio 1
alert ("Hello World");

//Ejercicio2
document.write("Hello World");

//Ejercicio3
console.log(3+2);

//Ejercicio4
let nombre = prompt("Nombre de usuario");
alert (`Hola ${nombre}`)

//Ejercicio5
let numero1 = prompt( "Ingrese un número");
let numero2 = prompt("Ingrese otro número");
console.log(`La suma de ${numero1} y ${numero2} es = ${parseInt(numero1) + parseInt(numero2)}`);

//Ejercicio6
function Mayor (n1, n2) {
    if(n1 > n2){
       console.log(`El número mayor es ${n1}`)

    }else{
       console.log(`El número mayor es ${n2}`)
    } 
}



//Eejercicio7
function MayordeTres (N1, N2, N3){
    console.log(Math.max(N1, N2, N3))
}

//Ejercicio8
function Divisible(numerox) { 
    if(numerox % 2 == 0){
        console.log("El número es divisible por dos");
}
    else{
         console.log("El número no es divisible por dos");

    }


}

//Ejercicio9
function Palabra(cadena){
    let=contador = 0
    for(let i = 0; i< cadena.length; i++){
        if(cadena[i] == "a" || cadena[i] == "A"){
            contador++
        }
    }
    alert("La cantidad de a es"+ contador)

} 

Palabra(araxy)






