//* Animations form and button
const arrowBtn = document.querySelector("ion-icon");
const myForm = document.getElementById("addEmployee");

let isRotated = false;
let isFormVisible = false;

arrowBtn.addEventListener("click", () => {
  isRotated = !isRotated;
  isFormVisible = !isFormVisible;

  if (isRotated) {
    arrowBtn.classList.add("rotate-90");
  } else {
    arrowBtn.classList.remove("rotate-90");
  }
  if (isFormVisible) {
    myForm.style.display = "flex";
    setTimeout(() => {
      myForm.classList.add("slide-in");
      myForm.classList.remove("slide-out");
    }, 100);
  } else {
    myForm.classList.add("slide-out");
    myForm.classList.remove("slide-in");
    setTimeout(() => {
      myForm.style.display = "none";
    }, 500);
  }
});