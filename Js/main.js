/* 
1 se pide al usuario registrarse con usuario y clave, solo se valida que clave sea de 4 digitos
2 Se solicita al usuario confirmar registro, reinsertando clave - Se valida nuevamente.
3 Bienvenida al sistema
  a_Se solicita ingreso de artefactos para calculadora de consumo electrico.
  b_Se solicita ingreso de consumo en KW
  c_ Se solicita ingreso de h/dia
  d_Se solicita ingreso de dias/semana
  e_Se realiza calculo matematico y se informa resultado.
  */
/* Mensaje de Bienvenida*/
let usuario = prompt("Bienvenidos a la calculadora de consumos. Ingrese usuario por favor: ");
console.log(usuario)
alert("Bienvenido " + usuario);
/* Mensajes y opciones de calculadora*/
let electrodomestico = prompt("Escoja una opcion:  \n1 Aire Acondicionado. \n2 Pava Electrica \n3 Televisor 42. \n4 Salir");
console.log(electrodomestico);
while (electrodomestico != 4) {
  let horas=0;
  let dias=0;
  switch (electrodomestico) {
    case '1':
      alert("Seleccionaste Aire Acondicionado")
      electrodomestico = "Aire Acondicionado";
      console.log("Eligio Aire Acondicionado");
      horas = Number(prompt("Cuantas horas al dia lo tiene encendido?"));
      console.log(horas)
      dias = Number(prompt("Cuantas dias a la semana?"));
      console.log(dias)
      calculo(usuario,electrodomestico,dias,horas);
      break;
    case '2':
      alert("Seleccionaste Pava Electrica")
      electrodomestico = "Pava Electrica";
      console.log("Eligio Pava Electrica");
      horas = Number(prompt("Cuantas horas al dia lo tiene encendido?"));
      console.log(horas)
      dias = Number(prompt("Cuantas dias a la semana?"));
      console.log(dias)
      calculo(usuario,electrodomestico,dias,horas);
      break;
    case '3':
      electrodomestico = "Televisor";
      console.log("Eligio Televisor");
      horas = Number(prompt("Cuantas horas al dia lo tiene encendido?"));
      console.log(horas)
      dias = Number(prompt("Cuantas dias a la semana?"));
      console.log(dias)
      calculo(usuario,electrodomestico,dias,horas);
      break;
    default:
      alert("Elija una opcion valida");
      console.log("Elija una opcion valida");
      continue;
      
  }
}

//Con esta funcion calculamos el consumo, segun los parametros elegidos//
function calculo(usuario, electrodomestico, dias, horas) {
  let consumoaa=20;
  let consumopv=4;
  console.log("Tenemos todos los datos y estamos calculando");
  if (electrodomestico=="Aire Acondicionado"){
    let consumototal= consumoaa*horas*dias*4;
    alert("Consumo total: "+ consumototal+" Kw al mes");
    console.log(consumototal);
  }
  else if (electrodomestico=="Pava Electrica"){
    let consumototal= consumopv*horas*dias*4;
    alert("Consumo total: "+ consumototal+" Kw al mes");
    console.log(consumototal);
  }
}
