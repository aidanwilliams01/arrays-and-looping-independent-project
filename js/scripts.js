function beepBoop(inputNumber) {
  let outputString = '';
  for (let index = 0; index <= inputNumber; index++) {
    if (index === 0) {
      outputString = '0';
    }
    else if (index.toString().includes('3')) {
      outputString = `${outputString}, Won't you be my neighbor?`;
    }
    else if (index.toString().includes('2')) {
      outputString = `${outputString}, Boop!`;
    }
    else if (index.toString().includes('1')) {
      outputString = `${outputString}, Beep!`;
    }
    else {
      outputString = `${outputString}, ${index}`;
    }
  }
  return outputString;
}

function beepBoopReverse(inputNumber) {
  let outputString = '';
  for (let index = inputNumber; index >= 0; index--) {
    if (index === inputNumber) {
      if (index.toString().includes('3')) {
        outputString = `Won't you be my neighbor?`;
      }
      else if (index.toString().includes('2')) {
        outputString = `Boop!`;
      }
      else if (index.toString().includes('1')) {
        outputString = `Beep!`;
      }
      else {
        outputString = `${index}`;
      }
    }
    else if (index.toString().includes('3')) {
      outputString = `${outputString}, Won't you be my neighbor?`;
    }
    else if (index.toString().includes('2')) {
      outputString = `${outputString}, Boop!`;
    }
    else if (index.toString().includes('1')) {
      outputString = `${outputString}, Beep!`;
    }
    else {
      outputString = `${outputString}, ${index}`;
    }
  }
  return outputString;
}