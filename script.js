const addSpiderTask = submitEvent => {
  submitEvent.preventDefault();
  const input = document.querySelector("input#task");
  const ul = document.querySelector("ul");
  ul.innerHTML += `<li> 
      <span onclick='completa(event)'> ${input.value} </span> 
      <button onclick='elimina(event)'> ELIMINA </button> 
    </li>`;
  submitEvent.targetclassList.toggle("size");
};
const completa = clickEvent => {
  clickEvent.target.classList.toggle("completo");
};

const elimina = clickEvent => {
  console.log(clickEvent);
  clickEvent.target.parentElement.style.display = "none";
};
