function calculateBMI() {
    console.log("calculateBMI function is called");
    var heightError = document.getElementById("heightError");
    var weightError = document.getElementById("weightError");
    var genderError = document.getElementById("genderError");
    var lifestyleError = document.getElementById("lifestyleError");
  
    heightError.textContent = "";
    weightError.textContent = "";
    genderError.textContent = "";
    lifestyleError.textContent = "";
  
    var heightInput = document.getElementById("height").value;
    var weightInput = document.getElementById("weight").value;
    var genderInput = document.querySelector(
      'input[name="gender"]:checked'
    );
    var lifestyleInputs = document.querySelectorAll(
      'input[name="lifestyle"]:checked'
    );
  
    if (
      !heightInput ||
      isNaN(heightInput) ||
      parseFloat(heightInput) <= 0
    ) {
      heightError.textContent = "[!] Enter a valid positive height";
    }
  
    if (
      !weightInput ||
      isNaN(weightInput) ||
      parseFloat(weightInput) <= 0
    ) {
      weightError.textContent = "[!] Enter a valid positive weight";
    }
  
    if (!genderInput) {
      genderError.textContent = "[!] Please select a gender";
    }
  
    if (lifestyleInputs.length === 0) {
      lifestyleError.textContent = "[!] Please select a lifestyle";
    }
  
    if (
      heightError.textContent ||
      weightError.textContent ||
      genderError.textContent ||
      lifestyleError.textContent
    ) {
      console.log("Validation failed. Returning without calculating BMI.");
      var resultElement = document.getElementById("result");
      resultElement.textContent = "";
      return;
    }
  
    var height = parseFloat(heightInput) / 100;
    var weight = parseFloat(weightInput);
    var bmi = weight / (height * height);
  
    var resultElement = document.getElementById("result");
    resultElement.textContent =
      "Your Height is: " +
      heightInput +
      "\nYour Weight is: " +
      weightInput +
      "\nYour Gender is: " +
      genderInput.value +
      "\nYour Lifestyle is: " +
      getSelectedLifestyles() +
      "\nYour BMI is: " +
      bmi.toFixed(2) +
      "\nStatus: " +
      getBMIStatus(bmi);
    console.log("BMI calculation successful");
  }
  
  function getSelectedLifestyles() {
    var selectedLifestyles = [];
    var lifestyleInputs = document.querySelectorAll(
      'input[name="lifestyle"]:checked'
    );
    lifestyleInputs.forEach(function (input) {
      selectedLifestyles.push(input.value);
    });
    return selectedLifestyles.join(", ");
  }
  
  function getBMIStatus(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }