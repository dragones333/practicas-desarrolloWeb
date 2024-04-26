let hora = 14;
if(hora<12){
    console.log("buenos dias")
} else if(hora < 19){
    console.log("buenos tardes")
} else{
    console.log("buenos noches")
}



let diaDeLaSemana = new Date().getDay();
console.log(diaDeLaSemana)

switch(diaDeLaSemana){
    case 0: 
            console.log("Domingo");
            break;
    case 1: 
            console.log("Lunes");
            break;
    case 2: 
            console.log("Martes");
            break;
    case 3: 
            console.log("MIercoles");
            break;
    case 4: 
            console.log("JUeves");
            break;
    case 5: 
            console.log("Viernes");
            break;
    case 6: 
            console.log("Sabado");
            break;
    default:
        console.log("dia no valido")
    
}
