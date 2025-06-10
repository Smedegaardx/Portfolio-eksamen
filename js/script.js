window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  },
  false
);


document.querySelector("#lammehave").addEventListener("click", lammehaveopen);
document.querySelector("#closePopup1").addEventListener("click", lammehaveclose);
document.querySelector("#popup-wrapper1").addEventListener("click", lammehaveclose);
document.querySelector("#cocktail").addEventListener("click", cocktailopen);
document.querySelector("#closePopup2").addEventListener("click", cocktailclose);
document.querySelector("#popup-wrapper2").addEventListener("click", cocktailclose);
document.querySelector("#firstsite").addEventListener("click", firstsiteopen);
document.querySelector("#closePopup3").addEventListener("click", firstsiteclose);
document.querySelector("#popup-wrapper3").addEventListener("click", firstsiteclose);
document.querySelector("#emergency").addEventListener("click", emergencyopen);
document.querySelector("#closePopup4").addEventListener("click", emergencyclose);
document.querySelector("#popup-wrapper4").addEventListener("click", emergencyclose);

function lammehaveopen() {
  console.log(this);
  document.getElementById("popup1").style.display = "block";
  document.getElementById("popup-wrapper1").style.display = "block";
}

function lammehaveclose() {
  console.log(this);
  document.getElementById("popup1").style.display = "none";
  document.getElementById("popup-wrapper1").style.display = "none";
}

function cocktailopen() {
  console.log(this);
  document.getElementById("popup2").style.display = "block";
  document.getElementById("popup-wrapper2").style.display = "block";
}
function cocktailclose() {
  console.log(this);
  document.getElementById("popup2").style.display = "none";
  document.getElementById("popup-wrapper2").style.display = "none";
}

function firstsiteopen() {
  console.log(this);
  document.getElementById("popup3").style.display = "block";
  document.getElementById("popup-wrapper3").style.display = "block";
}
function firstsiteclose() {
  console.log(this);
  document.getElementById("popup3").style.display = "none";
  document.getElementById("popup-wrapper3").style.display = "none";
}

function emergencyopen() {
  console.log(this);
  document.getElementById("popup4").style.display = "block";
  document.getElementById("popup-wrapper4").style.display = "block";
}
function emergencyclose() {
  console.log(this);
  document.getElementById("popup4").style.display = "none";
  document.getElementById("popup-wrapper4").style.display = "none";
}



