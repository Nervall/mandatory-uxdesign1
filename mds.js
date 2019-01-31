window.mds = {
    textField: textField,
    switch: '',
    checkbox: '',
    radioButton: ''
}

function textField(element) {
const selectInput = document.querySelector('.mds-text-field__input');
const selectLabel = document.querySelector('.mds-text-field__label');

selectInput.addEventListener('focus', addHighlight);
selectInput.addEventListener('blur', removeHighlight);

function addHighlight(e) {
    if (selectInput) {
        selectLabel.style.color = '';
        selectLabel.classList.remove('mds-text-field__label');
        selectLabel.classList.add('mds-text-field__label--active');
    }
}

function removeHighlight(e) {
    if (selectInput.value === '') {
        selectLabel.classList.remove('mds-text-field__label--active');
        selectLabel.classList.add('mds-text-field__label');
        
    } else if (selectInput.value !== '') {
        selectLabel.style.color = "#aaaaaa";
    }
}


/* ---------- Not in laboration ---------- */
const switchInput = document.querySelector('.mds-switch__input');
const checkboxInput = document.querySelector('.mds-checkbox__input');
const radioInput = document.querySelectorAll('.mds-radio__input');
const disable = document.querySelector('.mds-button__disable');
const enable = document.querySelector('.mds-button__enable');
const button = document.querySelectorAll('button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', disableEnable);
    }

function disableEnable(e) {
    const clickedButton = e.target;
    if (clickedButton === enable) {
        console.log('Enable all');
        selectInput.classList.remove('.mds-text-field__input:disabled');
        selectInput.removeAttribute("disabled");
        switchInput.removeAttribute("disabled");
        checkboxInput.removeAttribute("disabled");
        for (let i = 0; i < radioInput.length; i++) {
        radioInput[i].removeAttribute("disabled");
        }
    }
    else if (clickedButton === disable) {
        console.log('Disable all')
        selectInput.classList.add('.mds-text-field__input:disabled');
        selectInput.setAttribute("disabled", true);
        switchInput.setAttribute('disabled', true);
        checkboxInput.setAttribute('disabled', true);
        for (let i = 0; i < radioInput.length; i++) {
        radioInput[i].setAttribute('disabled', true);
        }
    }
}
}
  










/*
Create a JavaScript file named “mds.js” that defines an object called mds. The object should define
the following methods
● mds.textField(element)
● mds.switch(element)
● mds.checkbox(element)
● mds.radioButton(element)
These methods instantiate the element, adding functionality if necessary. If no JavaScript is
necessary, please leave the methods empty.
For this exercise only JavaScript code to control behavior of the text field label is necessary.
Optional: Return a function that can be used to remove all event listeners(if any) added by the method.
Thisisto avoid memory leaks when using the components.
*/