var corAtual = "azul"

function adicionar(tipo) {
  var texto = document.getElementById("textoNota").value;

  var nota = document.createElement("div");
  nota.classList.add("nota", corAtual);
  nota.textContent = texto;


  if (corAtual === "azul") {
    corAtual = "verde";
  } else if (corAtual === "verde") {
    corAtual = "roxo";
  } else {
    corAtual = "azul";
  }

 
  var botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.className = "remover";
  botaoRemover.onclick = function() {
    nota.remove();
  };

  nota.appendChild(botaoRemover);


  if (tipo === "urgente") {
    document.getElementById("Urgente").appendChild(nota);
  } else {
    document.getElementById("NaoUrgente").appendChild(nota);
  }

  document.getElementById("textoNota").value = '';
}

function apagarTudo() {
  document.getElementById("Urgente").innerHTML = '';
  document.getElementById("NaoUrgente").innerHTML = '';
}

