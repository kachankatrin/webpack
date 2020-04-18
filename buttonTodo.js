addTodo = (button, input, ul) => {
  const listElement = document.createElement('li');
      listElement.innerHTML = input.value;
      ul.appendChild(listElement);
      input.value = "";
      button.disabled = true;
}

module.exports = addTodo;