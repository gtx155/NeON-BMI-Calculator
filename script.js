document.getElementById("BMIForm").addEventListener("submit", function(event){
  event.preventDefault();

  let Height = document.getElementById("heightInput").value;
  let Weight = document.getElementById("weightInput").value;
      
  let Height2 = (Height / 100) ** 2;
  let BMIResult = Weight / Height2;
  
  let BMIRoundDown = Math.floor(BMIResult * 100) / 100;
  


  //bmi var to html
  let htmlBMIVar = "BMI = " + BMIRoundDown;
  let BMITextElement = document.getElementById("BMIText");
  BMITextElement.innerHTML = htmlBMIVar;

  if (BMIRoundDown < 18.5) {
    var FloatIcon = document.getElementById("float");
    FloatIcon.classList.remove("green", "red", "yellow");
    FloatIcon.classList.add("orange");
    FloatIcon.textContent = "Underweight";

    var Platform = document.getElementById("platform");
    Platform.classList.add("platform");
  } else if (BMIRoundDown >= 18.5 && BMIRoundDown <= 25) {
    var FloatIcon = document.getElementById("float");
    FloatIcon.classList.remove("orange", "red", "yellow");
    FloatIcon.classList.add("green");
    FloatIcon.textContent = "Healthy weight";

    var Platform = document.getElementById("platform");
    Platform.classList.add("platform");

    } else if (BMIRoundDown >= 25 && BMIRoundDown <= 30) {
    var FloatIcon = document.getElementById("float");
    FloatIcon.classList.remove("orange", "red", "green");
    FloatIcon.classList.add("yellow");
    FloatIcon.textContent = "Overweight";

    var Platform = document.getElementById("platform");
    Platform.classList.add("platform");

    } else if (BMIRoundDown > 30) {
      var FloatIcon = document.getElementById("float");
      FloatIcon.classList.remove("orange", "green", "yellow");
      FloatIcon.classList.add("red");
      FloatIcon.textContent = "Obese";

      var Platform = document.getElementById("platform");
      Platform.classList.add("platform");
    }

  }
);