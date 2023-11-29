const body = document.querySelector('body');
if (body.classList.contains('product-template')){
// ==========Scrolling Function Starting==========
window.addEventListener('scroll', function() {
  var scrollBar = document.getElementById('scrollBar');
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var isMobile = /Mobile|Android/i.test(navigator.userAgent);
  if (isMobile) {
    if (window.pageYOffset >= 1200) {
      scrollBar.classList.add('scrolling');
    } else {
      scrollBar.classList.remove('scrolling');
    }
  } else {
    if (screenWidth < 476 && window.pageYOffset >= 600) {
      scrollBar.classList.add('scrolling');
    } else if (window.pageYOffset >= 320) {
      scrollBar.classList.add('scrolling');
    } else {
      scrollBar.classList.remove('scrolling');
    }
  }
});
// ==========Scrolling Function Ending==========


// ==========Showing Color and Size of Selected product==========

document.addEventListener('DOMContentLoaded', function() {
  const radioInputElement = document.querySelector('input[type="radio"][name="Color"]');
  const radioInputsSize = document.querySelectorAll('input[type="radio"][name="Size"]');
  const divElementSize = document.querySelector('.atc-variant-size');
  const initiallyCheckedInput = Array.from(radioInputsSize).find(input => input.checked);

    const radioValue = radioInputElement.value;
    const divElement = document.querySelector('.atc-variant');
      divElement.innerText = radioValue;

  if (initiallyCheckedInput) {
    divElementSize.innerText = initiallyCheckedInput.value;
  }

  radioInputsSize.forEach(function(radioInputSize) {
    radioInputSize.addEventListener('change', function() {
      if (radioInputSize.checked) {
        const radioSize = radioInputSize.value;
        divElementSize.innerText = radioSize;
      }
    });
  });
});
// ==========Showing Color and Size of Selected product==========

const atcButton = document.querySelector('.atc-button');
const submitButton = document.querySelector('.product-form__submit');
atcButton.addEventListener('click', function() {
  submitButton.click();
});

function getInnerHTML() {
  const submitButton = document.querySelector('.product-form__submit span');
  return submitButton.innerHTML;
}
function updateATCButtonInnerHTML() {
  const atcButton = document.querySelector('.atc-button');
  atcButton.innerHTML = getInnerHTML();
}
const observer = new MutationObserver(updateATCButtonInnerHTML);
const targetNode = document.querySelector('.product-form__submit span');
const config = { childList: true, subtree: true };
observer.observe(targetNode, config);
updateATCButtonInnerHTML();
document.addEventListener('DOMContentLoaded', () => {
  updateATCButtonInnerHTML();
});

// Get references to the two input elements
const input1 = document.querySelector('input[name="quantity"]');
const input2 = document.querySelector('.atc-quantity-wrap input[name="quantity"]');

// Function to update the value of input2 with the value of input1
function updateInput2Value() {
  input2.value = input1.value;
}

// Function to update the value of input1 with the value of input2
function updateInput1Value() {
  input1.value = input2.value;
}

// Add event listeners to both input elements to keep them synchronized
input1.addEventListener('input', updateInput2Value);
input2.addEventListener('input', updateInput1Value);

// Additionally, add event listeners for the change event to cover plus and minus button clicks
input1.addEventListener('change', updateInput2Value);
input2.addEventListener('change', updateInput1Value);

// Initially set the values to be the same
updateInput2Value();

  
  
}
