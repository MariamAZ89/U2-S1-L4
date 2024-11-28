const parola = document.getElementById("sApp");
var i = 0;

function parole(i) {
  let array = ["single page app", "Interfacce web", "App native"];
  parola.classList.add("animated");
  //setTimeout(() => {  parola.classList.remove("animated"); },5000);
  setTimeout(() => {
    parola.innerText = array[i];
  }, 2000);

  if (i == array.length) {
    i = 0;
  }
}

parola.addEventListener("click", () => {
  window.setTimeout(() => {
    parole(i);
  }, 1000);
});
