document.getElementById("BMIForm").addEventListener("submit", function(event){
  event.preventDefault();

  let height = document.getElementById("heightInput").value; //future: convert 1.5 to 150
  let weight = document.getElementById("weightInput").value;
      
  let heightCalc = (height / 100) ** 2;
  let bmiResult = weight / heightCalc;
  
  let bmiRoundDown = Math.floor(bmiResult * 100) / 100;

  //bmi var to html
  let htmlBMIVar = "BMI = " + bmiRoundDown;
  let bmiTextElement = document.getElementById("BMIText");
  bmiTextElement.innerHTML = htmlBMIVar;

  if (bmiRoundDown < 18.5) {
    var floatIcon = document.getElementById("float");
    floatIcon.classList.remove("green", "red", "yellow");
    floatIcon.classList.add("orange");
    floatIcon.textContent = "Underweight";

    var platform = document.getElementById("platform");
    platform.classList.add("platform");
  } else if (bmiRoundDown >= 18.5 && bmiRoundDown <= 25) {
    var floatIcon = document.getElementById("float");
    floatIcon.classList.remove("orange", "red", "yellow");
    floatIcon.classList.add("green");
    floatIcon.textContent = "Healthy weight";

    var platform = document.getElementById("platform");
    platform.classList.add("platform");

    } else if (bmiRoundDown >= 25 && bmiRoundDown <= 30) {
    var floatIcon = document.getElementById("float");
    floatIcon.classList.remove("orange", "red", "green");
    floatIcon.classList.add("yellow");
    floatIcon.textContent = "Overweight";

    var platform = document.getElementById("platform");
    platform.classList.add("platform");

    } else if (bmiRoundDown > 30) {
      var floatIcon = document.getElementById("float");
      floatIcon.classList.remove("orange", "green", "yellow");
      floatIcon.classList.add("red");
      floatIcon.textContent = "Obese";

      var platform = document.getElementById("platform");
      platform.classList.add("platform");
    }
  }
);

//get all the elements that can change theme
const themedElmSelector = document.getElementsByName("themed");

const argon = document.querySelector('.background li:nth-child(1)');
argon.addEventListener('click', function() {
  argon.classList.add("argon");
  argon.style.backgroundColor = '#A850F0';

[...themedElmSelector].forEach(element => {
  element.classList.remove("neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("argon");
});

});

const neon = document.querySelector('.background li:nth-child(2)');
neon.addEventListener('click', function() {
  neon.classList.add("neon");
  neon.style.backgroundColor = '#FC321A';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("neon");
});
});

const helium = document.querySelector('.background li:nth-child(3)');
helium.addEventListener('click', function() {
  helium.classList.add("helium");
  helium.style.backgroundColor = '#D5443E';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "cesium");
  element.classList.add("helium");
});
});

const krypton = document.querySelector('.background li:nth-child(4)');
krypton.addEventListener('click', function() {
  krypton.classList.add("krypton");
  krypton.style.backgroundColor = '#C2B3C8';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "helium", "cesium");
  element.classList.add("krypton");
});
});

const xenon = document.querySelector('.background li:nth-child(5)');
xenon.addEventListener('click', function() {
  xenon.classList.add("xenon");
  xenon.style.backgroundColor = '#4467B2';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "krypton", "helium", "cesium");
  element.classList.add("xenon");
});
});

const hydrogen = document.querySelector('.background li:nth-child(6)');
hydrogen.addEventListener('click', function() {
  hydrogen.classList.add("hydrogen");
  hydrogen.style.backgroundColor = '#E5B1F5';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "xenon", "krypton", "helium", "cesium");
  element.classList.add("hydrogen");
});
});

const mercuryVapor = document.querySelector('.background li:nth-child(7)');
mercuryVapor.addEventListener('click', function() {
  mercuryVapor.classList.add("mercury-vapor");
  mercuryVapor.style.backgroundColor = '#52E896';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("mercury-vapor");
});
});

const nitrogen = document.querySelector('.background li:nth-child(8)');
nitrogen.addEventListener('click', function() {
  nitrogen.classList.add("nitrogen");
  nitrogen.style.backgroundColor = '#B83579';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium", "cesium");
  element.classList.add("nitrogen");
});
});

const cesium = document.querySelector('.background li:nth-child(9)');
cesium.addEventListener('click', function() {
  cesium.classList.add("cesium");
  cesium.style.backgroundColor = '#AEB4FF';

[...themedElmSelector].forEach(element => {
  element.classList.remove("argon", "neon", "radon", "nitrogen", "mercury-vapor", "hydrogen", "xenon", "krypton", "helium");
  element.classList.add("cesium");
});
});

const radon = document.querySelector('.background li:nth-child(10)');
radon.addEventListener('click', function() {
  radon.classList.add("radon");
  radon.style.backgroundColor = '#E81828';

[...themedElmSelector].forEach(element => {
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

//Wallpaper Mode goes into FULL SCREEN
const float = document.querySelector('#float');
const platform = document.querySelector('#platform');

const toBeHiddens = [...h1s, ...inputs, ...buttons]; 

function toggleWallpaper() {
  document.documentElement.requestFullscreen();
  float.classList.add('hide');
  platform.classList.add('hide');

  toBeHiddens.forEach(toBeHidden => {
    toBeHidden.classList.add('hide');
  });
}

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    console.log("Is Fullscreen")
  } else {
    float.classList.remove('hide');
    platform.classList.remove('hide');
    
    toBeHiddens.forEach(toBeHidden => {
      toBeHidden.classList.remove('hide');
    });
  }
});
