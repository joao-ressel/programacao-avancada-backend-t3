function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('usuarios');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let usuarios = data;
  return usuarios.map(function(usuario) {
    let li = createNode('li');
    li.innerHTML = `${usuario.name} | ${usuario.email}`;
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});