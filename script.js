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



//get all the elements that can change theme
const ThemedElmSelector = document.getElementsByName("themed");

const argon = document.querySelector('.background li:nth-child(1)');
argon.addEventListener('click', function() {
  argon.classList.add("argon");
  argon.style.backgroundColor = '#A850F0';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("argon");
});

});

const neon = document.querySelector('.background li:nth-child(2)');
neon.addEventListener('click', function() {
  neon.classList.add("neon");
  neon.style.backgroundColor = '#FC321A';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("neon");
});
});

const helium = document.querySelector('.background li:nth-child(3)');
helium.addEventListener('click', function() {
  helium.classList.add("helium");
  helium.style.backgroundColor = '#D5443E';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "cesium");
  element.classList.add("helium");
});
});

const krypton = document.querySelector('.background li:nth-child(4)');
krypton.addEventListener('click', function() {
  krypton.classList.add("krypton");
  krypton.style.backgroundColor = '#C2B3C8';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "helium", "cesium");
  element.classList.add("krypton");
});
});

const xenon = document.querySelector('.background li:nth-child(5)');
xenon.addEventListener('click', function() {
  xenon.classList.add("xenon");
  xenon.style.backgroundColor = '#4467B2';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "krypton", "helium", "cesium");
  element.classList.add("xenon");
});
});

const hydrogen = document.querySelector('.background li:nth-child(6)');
hydrogen.addEventListener('click', function() {
  hydrogen.classList.add("hydrogen");
  hydrogen.style.backgroundColor = '#E5B1F5';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "xenon", "krypton", "helium", "cesium");
  element.classList.add("hydrogen");
});
});

const mercuryVapor = document.querySelector('.background li:nth-child(7)');
mercuryVapor.addEventListener('click', function() {
  mercuryVapor.classList.add("mercury-vapor");
  mercuryVapor.style.backgroundColor = '#52E896';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("mercury-vapor");
});
});

const nitrogen = document.querySelector('.background li:nth-child(8)');
nitrogen.addEventListener('click', function() {
  nitrogen.classList.add("nitrogen");
  nitrogen.style.backgroundColor = '#B83579';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("nitrogen");
});
});

const cesium = document.querySelector('.background li:nth-child(9)');
cesium.addEventListener('click', function() {
  cesium.classList.add("cesium");
  cesium.style.backgroundColor = '#AEB4FF';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium");
  element.classList.add("cesium");
});
});

const radon = document.querySelector('.background li:nth-child(10)');
radon.addEventListener('click', function() {
  radon.classList.add("radon");
  radon.style.backgroundColor = '#E81828';

[...ThemedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium", "cesium", "nitrogen");
  element.classList.add("radon");
});
});

//modal pop-up
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})

//AMOLED theme support
const background = document.querySelector('.background');
const h1s = document.querySelectorAll('h1');
const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const dialogs = document.querySelectorAll('dialog');

const toBeAMOLEDS = [...h1s, ...buttons, ...inputs, ...dialogs]; 


function toggleAMOLED() {
  background.classList.toggle('amoled');

  toBeAMOLEDS.forEach(toBeAMOLED => {
    toBeAMOLED.classList.toggle('amoled');
  });
}

const buttonSubmit = document.querySelector('.submit-button');

const toBeHiddens = [...h1s, ...inputs]; 

//Wallpaper Mode
function toggleWallpaper() {
  buttonSubmit.classList.toggle('hide');

  toBeHiddens.forEach(toBeHidden => {
    toBeHidden.classList.toggle('hide');
  });
}

