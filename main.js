let valor = parseInt(prompt("Ingrese la cantidad que quiere convertir: "))
while(isNaN(valor)){
    valor = parseInt(prompt("Ingrese la cantidad que quiere convertir: "))
}
let mes = prompt("Ingrese el mes del 2011 al que quiere convertir su dinero: ").toLowerCase()
while(mes != "enero" && mes != "febrero" && mes != "marzo" && mes != "abril" && mes != "mayo" && mes != "junio" && mes != "julio" && mes != "agosto" && mes != "septiembre" && mes !="octubre" && mes != "noviembre" && mes != "diciembre"){
    mes = prompt("Ingrese el mes al que quiere convertir su dinero: ").toLowerCase()
}

let valorEnero = 4.13
let valorFebrero = 4.15
let valorMarzo = 4.15
let valorAbril = 4.30
let valorMayo = 4.29
let valorJunio = 4.27
let valorJulio = 4.34
let valorAgosto = 4.43
let valorSeptiembre = 4.43
let valorOctubre = 4.48
let valorNoviembre = 4.62
let valorDiciembre = 4.73

let division = (b) => valor / b;

if (mes == "enero"){
    alert("Tendrías " + division(valorEnero).toFixed(1) + " dólares")
} else if (mes == "febrero"){
    alert("Tendrías " + division(valorFebrero).toFixed(1) + " dólares")
} else if (mes == "marzo"){
    alert("Tendrías " + division(valorMarzo).toFixed(1) + " dólares")
} else if (mes == "abril"){
    alert("Tendrías " + division(valorAbril).toFixed(1) + " dólares")
} else if (mes == "mayo"){
    alert("Tendrías " + division(valorMayo).toFixed(1) + " dólares")
} else if (mes == "junio"){
    alert("Tendrías " + division(valorJunio).toFixed(1) + " dólares")
} else if (mes == "julio"){
    alert("Tendrías " + division(valorJulio).toFixed(1) + " dólares")
} else if (mes == "agosto"){
    alert("Tendrías " + division(valorAgosto).toFixed(1) + " dólares")
} else if (mes == "septiembre"){
    alert("Tendrías " + division(valorSeptiembre).toFixed(1) + " dólares")
} else if (mes == "octubre"){
    alert("Tendrías " + division(valorOctubre).toFixed(1) + " dólares")
} else if (mes == "noviembre"){
    alert("Tendrías " + division(valorNoviembre).toFixed(1) + " dólares")
} else if (mes == "diciembre"){
    alert("Tendrías " + division(valorDiciembre).toFixed(1) + " dólares")
} else{
    "Datos Incorrectos"
}
