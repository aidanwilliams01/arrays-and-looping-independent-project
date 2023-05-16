function beepBoop(inputNumber) {
  let outputString = '';
  for (let index = 0; index <= inputNumber; index++) {
    if (index === 0) {
      outputString = '0';
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