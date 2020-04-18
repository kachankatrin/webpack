const List = require('./ul/todo')
const Button = require('./button/button')
window.onload = function() {
  console.log('window')
  const newLi = new List();
  newLi.render();
  const newButton = new Button();
  newButton.render()
}