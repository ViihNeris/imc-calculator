const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector(".inputPeso");
  const inputAltura = e.target.querySelector(".inputAltura");
  
  // Para verificar se valores não são inválidos
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setAttention("Peso inválido.", false);
    return;
  }

  if (!altura) {
    setAttention("Altura inválida.", false);
    return;
  }
  const imc = getIMC(peso, altura);
  const nivel = getNivelIMC(imc);
  console.log(imc, nivel);

  const msg = `Seu IMC é ${imc} (${nivel}).`;

  setAttention(msg, true);
});

// Para mostrar mensagens no HTML
function criaP() {
  const p = document.createElement("p");
  return p;
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function getNivelIMC(imc) {
  const nivel = [
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
    "Magreza",
  ];

  if (imc < 18.5) return nivel[5];
  if (imc >= 39.9) return nivel[4];
  if (imc >= 35) return nivel[3];
  if (imc >= 30) return nivel[2];
  if (imc >= 25) return nivel[1];
  if (imc >= 18.5) return nivel[0];
}

function setAttention(msg, isValid) {
  let aviso = document.querySelector(".avisos");

  aviso.innerHTML = ``;

  const p = criaP();
  if (isValid) {
    p.classList.add("avisos-true");
  } else {
    p.classList.add("avisos-error");
  }

  p.innerHTML = msg;
  aviso.appendChild(p);
  console.log(getIMC);
}
