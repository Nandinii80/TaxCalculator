function calculateTax() {
    var income = parseFloat(document.getElementById('income').value);
    var extraIncome = parseFloat(document.getElementById('extra-income').value);
    var deductions = parseFloat(document.getElementById('deductions').value);
    var age = document.getElementById('age').value;
    var tax = 0;
  
    // Check if any input fields are empty
    var inputs = document.querySelectorAll('input[required], select[required]');
    inputs.forEach(function(input) {
      var id = input.id + '-error';
      var errorIcon = document.getElementById(id);
      if (!input.value) {
        errorIcon.style.display = 'inline';
      } else {
        errorIcon.style.display = 'none';
      }
    });
  
    // Calculate tax
    var totalIncome = income + extraIncome - deductions;
    if (totalIncome > 800000) {
      if (age === '<40') {
        tax = 0.3 * (totalIncome - 800000);
      } else if (age === '>=40&<60') {
        tax = 0.4 * (totalIncome - 800000);
      } else if (age === '>=60') {
        tax = 0.1 * (totalIncome - 800000);
      }
    }
  
    // Display result in modal
    var modal = document.getElementById('myModal');
    var resultDiv = document.getElementById('result');
    var result1Div = document.getElementById('result1');
    resultDiv.innerHTML = 'Your tax is: ₹' + tax.toFixed(2);
    result1Div.innerHTML = 'Your overall income is: ₹' + ((income+extraIncome) - tax).toFixed(2)
    modal.style.display = 'block';
  
    // Close the modal when the user clicks anywhere outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // Close the modal when the user clicks on the close button
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
  }