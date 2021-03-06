//Algoritmo de cálculo para impuestos internacionales en pesos argentinos.
// Contador de cuotas usando bucles hasta 12 cuotas.

// BOTON DE INFO CALCULADORA
document.getElementById("expandir").addEventListener("click", function() 
{
		var mostrarp = document.getElementById('mostrarInfo');
    var displayValue = (mostrarp.style.display === "block") ? "none" : "block";
    this.innerHTML = (displayValue === "block") ? "Ocultar" : "Acerca de la calculadora";
    mostrarp.style.display = displayValue;
});
//*************************************************************************** */

// BOTON DE INFO CONVERSOR
document.getElementById("conversor-expandir").addEventListener("click", function() 
{
		var mostrarp = document.getElementById('mostrarInfoConversor');
    var displayValue = (mostrarp.style.display === "block") ? "none" : "block";
    this.innerHTML = (displayValue === "block") ? "Ocultar" : "Acerca del conversor";
    mostrarp.style.display = displayValue;
});
//*************************************************************************** */

// BOTON DE INFO DEL LISTADO
document.getElementById("expandir-listado").addEventListener("click", function() 
{
		var mostrarp = document.getElementById('mostrarInfo-listado');
    var displayValue = (mostrarp.style.display === "block") ? "none" : "block";
    this.innerHTML = (displayValue === "block") ? "Ocultar" : "Recomendación de acciones";
    mostrarp.style.display = displayValue;
});
//*************************************************************************** */

const historialresultados = [];

const botonlimpiarResultados = document.querySelector('.LimpiarResultados')
const ListaDeResultados = document.getElementById('historial')

function LimpiarResultados(e){
  historialresultados.splice(0)
}

botonlimpiarResultados.addEventListener('click', (e) =>{
  ListaDeResultados.innerHTML = '';
  LimpiarResultados()
})

document.querySelector(".impuestoActual").textContent = "Impuesto actual: 65%";

function HistorialHTML() {
  //Creación de la <ul></ul> agregando <li></li>
  const lista = document.getElementById("historial");
  
  historialresultados.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    lista.appendChild(li);
  });
  // *---------------------------------------------------*
}

const historialcuotas = [];

//Botón y funcion para limpiar ultimas 12 cuotas
const botonlimpiarCuotas = document.querySelector('.LimpiarCuotas')
const ListaDeCuotas = document.getElementById('cuotas')

function LimpiarCuotas(e){
  historialcuotas.splice(0)
  // historialcuotas = []    
}

botonlimpiarCuotas.addEventListener('click', (e) =>{
  ListaDeCuotas.innerHTML = '';
  LimpiarCuotas();
})

// *---------------------------------------------------*

//Funcion para introducir cuotas en lista */
function CuotasGuardadas() {
  const cuotas = document.getElementById("cuotas");

  historialcuotas.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    cuotas.appendChild(li);
  });
}
//************************************************************************************* */

//  CALCULADOR DE CUOTAS // 
function calculadorCuotas(){
  
  let cuotas = 1;
  for (let cuotas = 1; cuotas < 13; cuotas++) {
    PrecioCuotas = historialresultados[0] / cuotas + 1;
    redondeado = PrecioCuotas.toFixed(2)
    historialcuotas.push(redondeado);
    console.log(PrecioCuotas);
    if (cuotas == 12) {
      let cuotasMontoActual = document.querySelector(".cuotasMontoActual"); 
      cuotasMontoActual.innerHTML = [
        "♦ Cuotas calculadas del resultado: " + historialresultados[0] + " ♦"];
      CuotasGuardadas();
      const CuotasJson = JSON.stringify(historialcuotas)
      console.log ('Cuotas de '+ historialresultados[0]+ ':' + CuotasJson);
      break;
    }
  }
}

//  CALCULADORA IMPUESTOS //
function calculadora() {
  let monto = parseInt(document.getElementById('numero').value)

  if (monto == "") {
    alert("Por favor, ingrese un monto valido.");
  } 
  else {
    let impuestoCalculo = (monto * 65) / 100;
    let montoTotal = monto + impuestoCalculo;
    historialresultados.push(montoTotal);
    HistorialHTML();

    const resultado = document.querySelector('.resultado').textContent = "El impuesto de " + monto + "$ARS" + " es de " + impuestoCalculo + "$ARS." + '\n El precio final es de: ' + montoTotal +' $ARS'
    console.log(historialresultados[-1])
  }        
}
// *******************************************************************

// Boton y evento para calcular cuotas
const botoncuotas = document.querySelector('.botonCuotas');
const listacuotas = document.getElementById('cuotas');
const listaCuotas = document.getElementById('cuotas:last-child');

botoncuotas.addEventListener('click', () => {
  calculadorCuotas();
})

// *********************************************

const saludo = document.querySelector(".GuardarNombre");
const maincontainer = document.querySelector(".main-container")
maincontainer.style.visibility = 'hidden'

saludo.addEventListener("click", saludar);
function saludar(e) {
  e.preventDefault();
  let ingresaNombre = document.getElementById("ingresaNombre").value;

  if (localStorage.getItem !== "") {
    const titulo = document.getElementById("identificador");
    let contenido = document.createElement("h3");
    contenido.textContent = `Bienvenid@ ${ingresaNombre}, es un placer conocerte ;).`;
    titulo.appendChild(contenido);
    maincontainer.style.visibility = 'visible'

    Toastify({ 
      text: "🤖 Bienvenido y gracias por usar Chill cave . . . 🤖",
      duration: 7000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "left", 
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #828282, #404040)",
      },
      onClick: function(){
      } 
    }).showToast();

  }  
  ingresaNombre = localStorage.setItem("Nombre", ingresaNombre);
}


// Boton mostrar y ocultar historial (Eventos)
const ocultar = document.querySelector(".ocultar");
const mostrar = document.querySelector(".mostrar");
const historial = document.getElementById("historial");
const cuotas = document.getElementById("cuotas");

mostrar.addEventListener("click", () => {
  historial.style.display = "block";
  cuotas.style.display = "block";
});

ocultar.addEventListener("click", () => {
  historial.style.display = "none";
  cuotas.style.display = "none";
});
//********************************************************/


//Calculadora Start --------------------------------------------/
const start = document.getElementById("start");
const calculador = document.getElementById("calculador");
const historialRes = document.querySelector(".historial-resultados-container");
const SeccionCuo = document.querySelector(".seccion-cuotas-container");
const BotonesC1 = document.querySelector(".botones-container1");
calculador.style.visibility = 'hidden'
historialRes.style.visibility = 'hidden'
SeccionCuo.style.visibility = 'hidden'
BotonesC1.style.visibility = 'hidden'
start.addEventListener('click', () => {
  calculador.style.visibility = 'visible'
  historialRes.style.visibility = 'visible'
  SeccionCuo.style.visibility = 'visible'
  BotonesC1.style.visibility = 'visible'
})

//-------------------------------------------------------/


//Calcular (botón) 
const numeroCalculadora = document.getElementById('.numero')
const calcular = document.querySelector('.calcular')

calcular.addEventListener('click', () =>{
  calculadora();
  Toastify({ 
    text: "🤖 Resultado calculado con éxito 🤖",
    duration: 4500,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #828282, #404040)",
    },
    onClick: function(){
    } // Callback after click
  }).showToast();
})
 
// INICIO CONVERSOR **************************************************************** 
const resultadosguardadosconversorusd = []   // ARRAY DONDE SE GUARDAN LOS RESULTADOS CALCULADOS POR EL CONVERSOR
const resultadosguardadosconversorbtc = []   // ARRAY DONDE SE GUARDAN LOS RESULTADOS CALCULADOS POR EL CONVERSOR

// FUNCION PARA LIMPIAR HISTORIAL DEL CONVERSOR

const ConversorLista = document.querySelector('.ConversorLista')
const BotonLimpiarConversor = document.querySelector('.Limpiar-historial-conversor')
function Limpiarconversor(e){
  resultadosguardadosconversorbtc.splice(0)
  resultadosguardadosconversorusd.splice(0)
}

BotonLimpiarConversor.addEventListener('click', (e) =>{
  ConversorLista.innerHTML = '';
  Limpiarconversor()
})


const Inputusd = document.querySelector('.Inputusd').value;
const Inputbtc = document.querySelector('.Inputbtc').value;

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response => response.json()) //transformo el response a .json
.then(datos => displayDatos(datos)) // guardo datos en una variable y abajo la muestro con console.log 

let usd // variable usd API

const displayDatos = datos => {
  usd = datos.bpi.USD.rate_float; //Dando valor a la variable usd usando los datos de la API
  const valoractualusd = document.querySelector('.Equivalenciausd')
  valoractualusd.innerHTML = usd + ' USD';
  const Equivalenciabtc = document.querySelector('.Equivalenciabtc')
  let operacion = (1*1) / usd  
  let redondeado = operacion.toFixed(6)
  Equivalenciabtc.innerHTML = redondeado + ' BTC';
}

// CONVERSOR (INPUT USD)
function conversionUSD(e) {  

  // FUNCION P/ GUARDAR Y MOSTRAR RESULTADOS DEL CONVERSOR USD
  function ResultadosConversorGuardadosUSD() {
    const ConversorLista = document.querySelector('.ConversorLista');
    resultadosguardadosconversorusd.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item + ' BTC';
    ConversorLista.appendChild(li);
    });
  }
  
  // *******************************************************************

  // CALCULO (DE USD A BTC)
  const ConversorLista = document.querySelector('.ConversorLista');
  const Inputusd = document.querySelector('.Inputusd').value;  
  let resultadoConversor = (Inputusd*Inputusd) / usd  
  let redondeado = resultadoConversor.toFixed(6)
  const resultado = document.querySelector('.ResultadoBTC').textContent = redondeado + ' BTC'
  resultadosguardadosconversorusd.push(redondeado);
  console.log(resultadosguardadosconversorusd + 'BTC')  
  ResultadosConversorGuardadosUSD();
  resultadosguardadosconversorusd.splice(0);
  // *******************************************************************
}

// 1btc = usd (variable de la API)
// Value de Inputbtc = X USD
// usd * Value de Inputbtc / 1 btc 

// CONVERSOR (INPUT BTC)
function conversionBTC(e){

  // FUNCION P/ GUARDAR Y MOSTRAR RESULTADOS DEL CONVERSOR BTC
  function ResultadosConversorGuardadosBTC() {
    const ConversorLista = document.querySelector('.ConversorLista');

    resultadosguardadosconversorbtc.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item + ' USD';
    ConversorLista.appendChild(li);
    });
  }
  // *******************************************************************
  
  // CALCULO (DE BTC A USD)
  const ConversorLista = document.querySelector('.ConversorLista');
  const Inputbtc = document.querySelector('.Inputbtc').value;  
  let resultadoConversorBTC = (usd*Inputbtc)  
  // console.log(resultadoConversorBTC);  
  let redondeado = resultadoConversorBTC.toFixed(6)
  const resultado = document.querySelector('.ResultadoUSD').textContent = redondeado + ' USD'
  resultadosguardadosconversorbtc.push(redondeado);
  console.log(resultadosguardadosconversorbtc + 'USD')
  ResultadosConversorGuardadosBTC();
  resultadosguardadosconversorbtc.splice(0);
}
// *******************************************************************

// BOTONES DE CONVERSION (USD & BTC)
const BotonConversorUSD = document.querySelector('.BotonConversorUSD')
BotonConversorUSD.addEventListener('click', () => {
  conversionUSD();
});
const BotonConversorBTC = document.querySelector('.BotonConversorBTC')
BotonConversorBTC.addEventListener('click', () => {
  conversionBTC();
});
// ***************************************************************


const startConversor = document.getElementById('start-conversor')
const datosporunidadContainer = document.querySelector('.datosporunidad-container')
const conversor = document.querySelector('.conversor')
const datosconversor = document.querySelector('.datos-conversor')
const Botonesconversorcontainer = document.querySelector('.Botones-conversor-container')
const ConversorListacontainer = document.querySelector('.ConversorLista-container')
datosporunidadContainer.style.visibility = 'hidden'
conversor.style.visibility = 'hidden'
Botonesconversorcontainer.style.visibility = 'hidden'
ConversorListacontainer.style.visibility = 'hidden'
datosconversor.style.visibility = 'hidden'

startConversor.addEventListener('click', () => {
  datosporunidadContainer.style.visibility = 'visible'
  conversor.style.visibility = 'visible'
  Botonesconversorcontainer.style.visibility = 'visible'
  ConversorListacontainer.style.visibility = 'visible'
  datosconversor.style.visibility = 'visible'
})


// RECOMENDACIONES ARRAY LISTA 
const startrecomendaciones = document.getElementById('start-recomendaciones')
const recomendacioneslista = document.querySelector('.recomendaciones-lista')
const recomendacioneslistacontainer = document.querySelector('.recomendaciones-lista-container')
recomendacioneslistacontainer.style.visibility = 'hidden'

startrecomendaciones.addEventListener('click', () =>{
  recomendacioneslistacontainer.style.visibility = 'visible'
})

function tierlistFunction() {
    const recomendacioneslista = document.querySelector('.recomendaciones-lista');
    tierlistarray.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = item
        recomendacioneslista.appendChild(li);
      });
    }
    
    const tierlistheaders = ['Moneda', 'Precio', '1h', '24h', '7d'] 
    const tierlistarray = [] 

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h')
  .then(response => response.json()) //transformo el response a .json
  .then(datalist => {
    console.log(datalist)
    // let redondeado = datalist[0].price_change_percentage_1h_in_currency.toFixed(1)  && datalist[0].price_change_percentage_24h.toFixed(1)
    // let redondeado2 = datalist[1].price_change_percentage_1h_in_currency.toFixed(1) && datalist[1].price_change_percentage_24h.toFixed(1)
    // let redondeado3 = datalist[2].price_change_percentage_1h_in_currency.toFixed(1) && datalist[2].price_change_percentage_24h.toFixed(1)
    // let redondeado4 = datalist[3].price_change_percentage_1h_in_currency.toFixed(1) && datalist[3].price_change_percentage_24h.toFixed(1)
    // let redondeado5 = datalist[4].price_change_percentage_1h_in_currency.toFixed(1) && datalist[4].price_change_percentage_24h.toFixed(1)
    // let redondeado6 = datalist[5].price_change_percentage_1h_in_currency.toFixed(1) && datalist[5].price_change_percentage_24h.toFixed(1)
    // let redondeado7 = datalist[6].price_change_percentage_1h_in_currency.toFixed(1) && datalist[6].price_change_percentage_24h.toFixed(1)
    // let redondeado8 = datalist[7].price_change_percentage_1h_in_currency.toFixed(1) && datalist[7].price_change_percentage_24h.toFixed(1)
    // let redondeado9 = datalist[8].price_change_percentage_1h_in_currency.toFixed(1) && datalist[8].price_change_percentage_24h.toFixed(1)
    // let redondeado10 = datalist[9].price_change_percentage_1h_in_currency.toFixed(1) && datalist[9].price_change_percentage_24h.toFixed(1)
    tierlistarray.push('1) ' + datalist[0].name + ' (' + datalist[0].symbol + ')' + ': ' + datalist[0].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[0].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[0].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('2) ' + datalist[1].name + ' (' + datalist[1].symbol + ')' + ': ' + datalist[1].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[1].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[1].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('3) ' + datalist[2].name + ' (' + datalist[2].symbol + ')' + ': ' + datalist[2].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[2].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[2].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('4) ' + datalist[3].name + ' (' + datalist[3].symbol + ')' + ': ' + datalist[3].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[3].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[3].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('5) ' + datalist[4].name + ' (' + datalist[4].symbol + ')' + ': ' + datalist[4].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[4].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[4].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('6) ' + datalist[5].name + ' (' + datalist[5].symbol + ')' + ': ' + datalist[5].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[5].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[5].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('7) ' + datalist[6].name + ' (' + datalist[6].symbol + ')' + ': ' + datalist[6].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[6].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[6].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('8) ' + datalist[7].name + ' (' + datalist[7].symbol + ')' + ': ' + datalist[7].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[7].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[7].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('9) ' + datalist[8].name + ' (' + datalist[8].symbol + ')' + ': ' + datalist[8].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[8].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[8].price_change_percentage_24h.toFixed(2) + '%')
    tierlistarray.push('10) ' + datalist[9].name + '  (' + datalist[9].symbol + ')' + ': ' + datalist[9].current_price + 'USD ' + '\xa0\xa0' + '1h: '+ datalist[9].price_change_percentage_1h_in_currency.toFixed(2) + '% / 24h: ' + datalist[9].price_change_percentage_24h.toFixed(2) + '%')
    
    console.log(tierlistarray)
    tierlistFunction();
  })  



