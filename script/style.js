let titulos = [];
let indicetitulos = 0;
titulos = [
  "Trabalho de Matematica",
  "Felipe Zanoni da Rosa",
  "Validação de CPF e RG",
];

function atualizarTitulo() {
  document.getElementById("idTitulo").innerHTML = titulos[indicetitulos];
  indicetitulos = (indicetitulos + 1) % titulos.length;
}

setInterval(atualizarTitulo, 2000);