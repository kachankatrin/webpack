require('./index.scss')
const myImg = require('../solar.jpeg').default
class Button {
  render() {
    const body = document.querySelector('body');
    console.log('render')
    const button1 = document.createElement('button');
    button1.innerHTML = 'CLICK ME';
    button1.onclick = function() {
      console.log('img')
      const img = document.createElement('img');
      img.src = myImg;
      body.append(img)
    }
    body.append(button1)
  }
}
module.exports = Button;