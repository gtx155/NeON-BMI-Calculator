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
        FloatIcon.style.backgroundColor = "orange";
        FloatIcon.textContent = "Underweight";

      } else if (BMIRoundDown >= 18.5 && BMIRoundDown <= 25) {
        var FloatIcon = document.getElementById("float");
        FloatIcon.style.backgroundColor = "green";
        FloatIcon.textContent = "Healthy weight";

      } else if (BMIRoundDown >= 25 && BMIRoundDown <= 30) {
        var FloatIcon = document.getElementById("float");
        FloatIcon.style.backgroundColor = "yellow";
        FloatIcon.textContent = "Overweight";

      } else if (BMIRoundDown > 30) {
        var FloatIcon = document.getElementById("float");
        FloatIcon.style.backgroundColor = "red";
        FloatIcon.textContent = "Obese";
      } 
    }
);

