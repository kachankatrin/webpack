require('./index.scss')
const inputCheck = require('../input');
const addTodo = require('../buttonTodo')
class List {
  render() {
    console.log('render')
    const input = document.createElement('input');
    const button = document.createElement('button');
    const buttonUl = document.createElement('button');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const body = document.querySelector('body');
    button.innerHTML = 'Add todo';
    buttonUl.innerHTML = 'in Ul';
    button.disabled = true;
    input.name = "newTodo";
    input.value = '';
    console.log(input.value)
    input.oninput = (()=>inputCheck(button));
    button.onclick = (()=>addTodo(button, input, ul))   
    li1.innerHTML = 'Go to the cinema';
    li2.innerHTML = 'Water flowers';
    ul.append(buttonUl, li1, li2)
    ul.onclick = function(e) {
      ul.removeChild(e.target);
    }
    body.append(input, button, ul)
  }
}

module.exports = List;

