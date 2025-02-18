function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function clearResult() {
    document.getElementById("result").value = '';
  }
  
  function calculateResult() {
    const resultField = document.getElementById("result");
    try {
      resultField.value = eval(resultField.value);  // Using eval to calculate the expression
    } catch (e) {
      resultField.value = 'Error';
    }
  }
  