
let paragraph = document.createElement("h1");
let age = prompt("Yoshingiz nechchida?", " ").trim();
let phonePrice = 18;

if (isNaN(age)){
  document.querySelector("body").style.background = "yellow";
  document.querySelector(".matn").textContent = "Ismizni emas yoshizni kiriting🤣";
} else {
  if (age >= 60) {
    document.querySelector("body").style.background = "grey";
    document.querySelector(".matn").textContent = "Qarib qolibsizku😀🙂";
}
else  {
  if (age >= phonePrice){
    document.querySelector("body").style.background = "blue";
    document.querySelector(".matn").textContent = "Katta bola bo'lib qolibsiz marhamat😎😀";
  } else{
  document.querySelector("body").style.background = "red";
  document.querySelector(".matn").textContent = "Uzr hali yoshlik qilas😉🤦‍♂️";
  }
}
}