/*function calculaFormulaIMC(altura, peso) {

    calculaImc = peso / (altura * altura);
    return calculaImc;
}*/

let formulaIMC = (altura, peso) => {
  let calculaImc = peso / (altura ** 2);
  return calculaImc;
};

function diagnostificaIMC(altura, peso) {
  let calculaIMC = formulaIMC(altura, peso); //calculaFormulaIMC(altura, peso);
  if (calculaIMC < 18.5) {
    return `Abaixo do normal.`;
  } else if (calculaIMC <= 24.9) {
    // 18.5 e 24.9
    return "Normal.";
  } else if (calculaIMC <= 29.9) {
    // 25 e 29.9
    return `Sobrepeso.`;
  } else if (calculaIMC <= 39.9) {
    // 30 e 39.9
    return `Obesidade`;
  } else {
    return `Obesidade grave!`; // > 40
  }
}

function funcaoJQuery() {
  let peso = $("#inputPeso").val(); // input val()
  let altura = $("#inputAltura").val(); //inputs val()

  let calcula = diagnostificaIMC(altura, peso); // chamada da funcao;

  // tipos estáticos: <span>,<h1>,<p>;
  // val() são inputs;

  $("#mensagem").text(calcula); // retorno span
  //console.log(calcula);
}

// id são identificadores unicos para um campo, tipo um cpf;
