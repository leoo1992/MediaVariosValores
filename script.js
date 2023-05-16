function calcularMediaValores() {
  var notas = [];
  var soma = 0;
  var notasElementos = document.getElementsByClassName("nota");

  for (var i = 0; i < notasElementos.length; i++) {
    var nota = parseFloat(notasElementos[i].value);
    if (!isNaN(nota)) {
      notas.push(nota);
    }
  }

  if (notas.length === 0) {
    document.getElementById("resultado").innerHTML = "Nenhum valor informado";
  } else {
    for (var i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    var media = soma / notas.length;
    document.getElementById("resultado").innerHTML = "A média é: " + media.toFixed(2);
  }

  var myModal = new bootstrap.Modal(document.getElementById("resultadoModal"), {
    keyboard: false
  });
  myModal.show();
}



function aumentarForm() {
  const container = document.querySelector('.calculadora-container');
  const form = document.createElement('form');
  form.classList.add('form-notaclass', 'mt-1');
  form.innerHTML = `
    <div class="flex-row form-group d-flex align-items-center justify-content-center">
      <div class="col-8 text-center">
        <input placeholder="Insira uma nota" type="number" step="1" class="form-control nota" id="nota" required>
      </div>
      <button type="button" class="btn btn-danger" onclick="excluirForm()">x</button>
      <span class="m-1">Excluir</span>
    </div>
  `;function calcularMediaValores() {
    var notas = [];
    var soma = 0;
    var notasElementos = document.getElementsByClassName("nota");
  
    for (var i = 0; i < notasElementos.length; i++) {
      var nota = parseFloat(notasElementos[i].value);
      if (!isNaN(nota)) {
        notas.push(nota);
      }
    }
  
    if (notas.length === 0) {
      document.getElementById("resultado").innerHTML = "Nenhum valor informado";
    } else {
      for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
      }
      var media = soma / notas.length;
      document.getElementById("resultado").innerHTML =
        "A média é: " + media.toFixed(2);
    }
  
    var myModal = new bootstrap.Modal(document.getElementById("resultadoModal"), {
      keyboard: false
    });
    myModal.show();
  }
  
  function aumentarForm() {
    const container = document.querySelector(".calculadora-container");
    const form = document.createElement("form");
    form.classList.add("form-notaclass", "mt-1");
    form.innerHTML = `
      <div class="flex-row form-group d-flex align-items-center justify-content-center">
        <div class="col-8 text-center">
          <input placeholder="Insira uma nota" type="number" step="1" class="form-control nota" id="nota" required>
        </div>
        <button type="button" class="btn btn-danger" onclick="excluirForm()">x</button>
      </div>
    `;
    container.insertBefore(form, container.lastElementChild);
  }
  
  function excluirForm() {
    const form = event.target.parentNode.parentNode;
    form.remove();
  }
  
  container.insertBefore(form, container.lastElementChild);
}

function excluirForm() {
  const form = event.target.parentNode.parentNode;
  form.remove();
}
