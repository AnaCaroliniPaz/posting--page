const form = document.querySelector("#form-post");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");

const renderizarTitulo = document.querySelector("#renderizar-titulo");
const renderizarConteudo = document.querySelector("#renderizar-conteudo");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(retorno => {

    // renderização na tela
    renderizarTitulo.innerHTML = retorno.title;
    renderizarConteudo.innerHTML = retorno.body;

    // limpa campos
    titulo.value = "";
    conteudo.value = "";
  });
});
