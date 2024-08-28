let counter = 0;
const numberDisplay = document.getElementById("numberDisplay");
const buttonContainer = document.getElementById("buttonContainer");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const arrayButton = document.getElementById("arrayButton");
const divisibleBy3Button = document.getElementById("divisibleBy3Button");
const divisibleBy5Button = document.getElementById("divisibleBy5Button");
const removeButton = document.getElementById("removeButton");


function updateDisplay(){
  numberDisplay.textContent = counter;
}

//Increment
incrementButton.addEventListener('click',() => {
  counter++;
  updateDisplay();
});

//Decrement
decrementButton.addEventListener('click',() => {
  counter++;
  updateDisplay();
});

//complete Array
arrayButton.addEventListener('click',() => {
  buttonContainer.innerHTML = '';
  for(let i=0;i<=counter;i++){
    const button = document.createElement('button');
    button.textContent = i;
    buttonContainer.appendChild(button);
  }
});

//Numbers Divisible by 3
divisibleBy3Button.addEventListener('click',() => {
  buttonContainer.innerHTML = '';
  for(let i=0;i<=counter;i++){
    if(i % 3 === 0){
      const button = document.createElement('button');
      button.textContent = i;
      buttonContainer.appendChild(button);
    }
  }
});

//Numbers Divisible by 5
divisibleBy5Button.addEventListener('click',() => {
  buttonContainer.innerHTML = '';
  for(let i=0;i<=counter;i++){
    if(i % 5 === 0){
      const button = document.createElement('button');
      button.textContent = i;
      buttonContainer.appendChild(button);
    }
  }
});

//remove last child btn
removeButton.addEventListener('click',() => {
  if(buttonContainer.lastChild){
    buttonContainer.removeChild(buttonContainer.lastChild);
  }
});