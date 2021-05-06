// Função Parte INTEIRA de um NUMERO
function mostrarParteInteira(){
  var numFracionado = document.getElementById("fracionado").value
  var numInteiro = Math.round(numFracionado)
  alert(numInteiro)
  document.getElementById("fracionado").value = ""
}


// Calculo da POTENCIA
function calcularPotencia(){
  var n1 = document.getElementById("base").value
  var n2 = document.getElementById("expoente").value
  
  // var resultado = n1 ** n2
  var resultado = Math.pow(n1,n2)
  alert("O resultado de " + n1 + " elevado a " + n2 + " é igual a " + resultado)

  document.getElementById("base").value = ""
  document.getElementById("expoente").value = ""
}

// Funções de calcular CIRCUFERENCIA
function compCircunferencia(){
  const pi = Math.PI
  var raioCircunf = document.getElementById("raioCircunf").value
  var calcCircunf = (2 * pi * raioCircunf).toFixed(3)

  alert("A fórmula C = 2 * π * raio resulta em " + calcCircunf)
  document.getElementById('raioCircunf').value = ""
 
}

function areaCircunferencia() {
  var raioDoCirculo = document.getElementById("raioCircunferencia").value
  var areaDoCirculo = (Math.PI * Math.pow(raioDoCirculo, 2)).toFixed(3)

  alert("A fórmula A =  π * r² resulta em " + areaDoCirculo)
  document.getElementById("raioCircunferencia").value = ""
}


// Função Area do CUBO
function areaBaseCubo(){
  var arestaCubo = document.getElementById("arestaCubo").value
  var areaDaBase = (Math.pow(arestaCubo, 2)).toFixed(3)

  alert("A área da base vale " + areaDaBase)

  areaTotalCubo(areaDaBase)
  volumeDoCubo(arestaCubo)

  function areaTotalCubo(areaDaBaseDoCubo){
      var areaTotal = (areaDaBaseDoCubo * 6).toFixed(3)
      alert("A área total deste cubo vale " + areaTotal)
  }

  function volumeDoCubo(arestaDoCubo){
      var volumeCubo = (Math.pow(arestaDoCubo, 3)).toFixed(3)
      alert("O volume deste cubo vale " + volumeCubo)
  }

  document.getElementById("arestaCubo").value = ""
}

// RAIZ QUADRADA
function raizQuadrada() {
  var numCalcRaiz = document.getElementById("raizQd").value
  var valorRaizQuadrada = Math.sqrt(numCalcRaiz).toFixed(3)

  alert("A raiz quadrada de " + numCalcRaiz + " vale " + valorRaizQuadrada)
  document.getElementById("raizQd").value = ""
}