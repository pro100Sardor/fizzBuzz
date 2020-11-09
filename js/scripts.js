/********************************************************\

// submit status must be stopped
// need to take the input value from the form
// the value of the input must be divisible by 3, 5, two, and not divisible by both.
// the result should be output in html

\********************************************************/


// submit status must be stopped
var elUserForm = document.querySelector('#userForm');

elUserForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  // need to take the input value from the form
  var elUserNumber = parseFloat(elUserForm.querySelector('#userNumber').value.trim(), 10);


  // the value of the input must be divisible by 3, 5, two, and not divisible by both
  var elFizzChecker = elUserNumber % 3;
  var elBuzzChecker = elUserNumber % 5;

  var elFizzBuzzCheckerResult = '';

  if (elFizzChecker === 0 || elBuzzChecker === 0) {
    if (elFizzChecker === 0) {
      elFizzBuzzCheckerResult = 'Fizz';
    }

    if (elBuzzChecker === 0) {
      elFizzBuzzCheckerResult += 'Buzz';
    }
  } else {
    elFizzBuzzCheckerResult = elUserNumber;
  }

  // the result should be output in html
  document.querySelector('#fizzBuzzResult').textContent = elFizzBuzzCheckerResult;
})