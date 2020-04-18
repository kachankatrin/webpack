inputCheck = (button) => {
  if (this.value === '') {
    console.log(button)
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    }

module.exports = inputCheck;