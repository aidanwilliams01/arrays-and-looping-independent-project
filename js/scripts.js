function beepBoop(name, inputNumber) {
  let outputString = '';
  for (let index = 0; index <= inputNumber; index++) {
    if (index === 0) {
      outputString = '0';
    }
    else if (index.toString().includes('3')) {
      outputString = `${outputString}, ${name}, won't you be my neighbor?`;
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

function beepBoopReverse(name, inputNumber) {
  let outputString = '';
  for (let index = inputNumber; index >= 0; index--) {
    if (index === inputNumber) {
      if (index.toString().includes('3')) {
        outputString = `${name}, won't you be my neighbor?`;
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
      outputString = `${outputString}, ${name}, won't you be my neighbor?`;
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

function onPageLoad() {
  const form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const submissionType = document.activeElement.value;
    const name = document.querySelector("input#name").value;
    const inputNumber = document.querySelector("input#number").value;
    let outputString = '';
    if (submissionType === 'reverse') {
      outputString = beepBoopReverse(name, inputNumber);
    }
    else {
      outputString = beepBoop(name, inputNumber);
    }
    // document.querySelector("p").setAttribute("class", "results");
    document.querySelector("p").innerText = outputString;
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);