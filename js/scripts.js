function beepBoop(inputNumber) {
  let outputString = '';
  for (let index = 0; index <= inputNumber; index++) {
    if (index === 0) {
      outputString = '0';
    }
    else {
      outputString = `${outputString}, ${index}`;
    }
  }
  return outputString;
}