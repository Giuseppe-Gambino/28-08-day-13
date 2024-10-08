const body = document.querySelector("body");
const form = document.querySelector("form");

const nome = document.getElementById("nome");
const button = document.getElementById("button");

form.onsubmit = function (event) {
  console.log(nome.value);

  //   creazione task
  const card = document.createElement("div");
  card.id = `card`;
  const task = document.createElement("div");
  task.id = `task`;

  //   testo
  const titoloC = document.createElement("p");
  titoloC.innerText = nome.value;

  //   button fatto
  const buttFatto = document.createElement("button");
  buttFatto.id = `fatto`;
  buttFatto.type = `button`;
  buttFatto.innerText = `Fatto!`;
  // button elimina
  const buttElimina = document.createElement("button");
  buttElimina.id = `elimina`;
  buttElimina.type = `button`;
  buttElimina.innerText = `Elimina!`;

  //   funzioni button
  buttFatto.addEventListener("click", (Taskfatta) => {
    titoloC.style.textDecoration = "line-through";
    card.className = "cardfatta";
  });

  buttElimina.addEventListener("click", (Delete) => {
    card.remove();
  });

  //   assegnazione elementi task
  body.appendChild(card);
  card.appendChild(task);
  task.appendChild(titoloC);
  task.appendChild(buttFatto);
  task.appendChild(buttElimina);

  event.preventDefault();
  form.reset();
};
