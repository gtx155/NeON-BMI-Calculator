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



const listItem1 = document.querySelector('.background li:nth-child(1)');
const ThemedElmSelector = document.getElementsByName("themed");

listItem1.addEventListener('click', function() {
listItem1.classList.add("argon");
listItem1.style.backgroundColor = '#A850F0';


[...ThemedElmSelector].forEach(element => {
  element.classList.remove("neon");
  element.classList.add("argon");
});

});

const listItem2 = document.querySelector('.background li:nth-child(2)');

listItem2.addEventListener('click', function() {
listItem2.classList.add("neon");
listItem2.style.backgroundColor = '#FC321A';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon");
  element.classList.add("neon");
});
});

const listItem3 = document.querySelector('.background li:nth-child(3)');

listItem3.addEventListener('click', function() {
listItem3.style.backgroundColor = 'yellow';
});

const listItem4 = document.querySelector('.background li:nth-child(4)');

listItem4.addEventListener('click', function() {
listItem4.style.backgroundColor = 'blue';
});

const listItem5 = document.querySelector('.background li:nth-child(5)');

listItem5.addEventListener('click', function() {
listItem5.style.backgroundColor = 'orange';
});

const listItem6 = document.querySelector('.background li:nth-child(6)');

listItem6.addEventListener('click', function() {
listItem6.style.backgroundColor = 'aqua';
});

const listItem7 = document.querySelector('.background li:nth-child(7)');

listItem7.addEventListener('click', function() {
listItem7.style.backgroundColor = 'green';
});

const listItem8 = document.querySelector('.background li:nth-child(8)');

listItem8.addEventListener('click', function() {
listItem8.style.backgroundColor = 'coral';
});

const listItem9 = document.querySelector('.background li:nth-child(9)');

listItem9.addEventListener('click', function() {
listItem9.style.backgroundColor = 'teal';
});
