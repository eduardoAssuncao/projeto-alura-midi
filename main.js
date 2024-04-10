

const listaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === "audio"){
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido");
    }
}

for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    // Tamplate String
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = () => {
        tocaSom(idAudio);
    }

    tecla.onkeydown = (evento) => {
        if(evento.code === "Enter" || evento.code === "Space")
        tecla.classList.add("ativa");
    }

    tecla.onkeyup = () => {
        tecla.classList.remove("ativa");
    }
}

//DESAFIO
// const listaTeclas = document.querySelectorAll("input[type='button']");
// let telefone = document.querySelector("#telefone");
// for(let i = 0; i < listaTeclas.length; i++){
//   const tecla = listaTeclas[i];
//   const numero = listaTeclas[i].value;
  
//   tecla.onclick = () => {
//     digitarTelefone(numero);
//   }
// }

// function digitarTelefone(digito){
//   telefone.value += digito;
// }

//RESOLUÇÃO DE DESAFIO ALURA
// const listaDeTeclas = document.querySelectorAll('input[type=button]');
// const inputTel = document.querySelector('input[type=tel]');

// for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  
//   const tecla = listaDeTeclas[indice];
  
//   tecla.onclick = function () {
//     inputTel.value = inputTel.value + tecla.value;
//   }
// }
