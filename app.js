// https://www.omnicalculator.com/finance/ctr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const clickthroughrateRadio = document.getElementById('clickthroughrateRadio');
const adimpressionsRadio = document.getElementById('adimpressionsRadio');
const numberofclicksRadio = document.getElementById('numberofclicksRadio');

let clickthroughrate;
let adimpressions = v1;
let numberofclicks = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

clickthroughrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Ad impressions';
  variable2.textContent = 'Number of clicks';
  adimpressions = v1;
  numberofclicks = v2;
  result.textContent = '';
});

adimpressionsRadio.addEventListener('click', function() {
  variable1.textContent = 'Click through rate';
  variable2.textContent = 'Number of clicks';
  clickthroughrate = v1;
  numberofclicks = v2;
  result.textContent = '';
});

numberofclicksRadio.addEventListener('click', function() {
  variable1.textContent = 'Click through rate';
  variable2.textContent = 'Ad impressions';
  clickthroughrate = v1;
  adimpressions = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(clickthroughrateRadio.checked)
    result.textContent = `Click through rate = ${computeclickthroughrate().toFixed(2)}`;

  else if(adimpressionsRadio.checked)
    result.textContent = `Ad impressions = ${computeadimpressions().toFixed(2)}`;

  else if(numberofclicksRadio.checked)
    result.textContent = `Number of clicks = ${computenumberofclicks().toFixed(2)}`;
})

// calculation

function computeclickthroughrate() {
  return (Number(numberofclicks.value) / Number(adimpressions.value)) * 100;
}

function computeadimpressions() {
  return Number(numberofclicks.value) / (Number(clickthroughrate.value) / 100);
}

function computenumberofclicks() {
  return (Number(clickthroughrate.value) / 100) * Number(adimpressions.value);
}