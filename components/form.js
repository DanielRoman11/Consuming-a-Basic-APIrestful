//* Animations form and button
const arrowBtn = document.querySelector("ion-icon");
const myForm = document.getElementById("addEmployee");

let isRotated = false;
let isFormVisible = false;

arrowBtn.addEventListener("click", () => rotatedButton());

function rotatedButton(){
  isRotated = !isRotated;
  isFormVisible = !isFormVisible;

  if (isRotated) {
    arrowBtn.classList.add("rotate-90");
  } else {
    arrowBtn.classList.remove("rotate-90");
  }
  if (isFormVisible) {
    myForm.style.display = "flex";
    myForm.classList.add("slide-in");
    myForm.classList.remove("slide-out");
  } else {
    myForm.classList.add("slide-out");
    myForm.classList.remove("slide-in");

    document.getElementById("id").value = '';
    document.getElementById("id").classList.add("hidden");
    document.getElementById("name").value = '';
    document.getElementById("salary").value = '';
    document.getElementById("addBtn").value = "Add";
  }
}
export function showButton(){
  if(!isFormVisible && !isRotated){
    arrowBtn.classList.add("rotate-90");
    myForm.style.display = "flex";
    myForm.classList.add("slide-in");
    myForm.classList.remove("slide-out");

    isRotated = !isRotated;
    isFormVisible = !isFormVisible;
  }
}
export function hideButton(){
  if(isFormVisible && isRotated){
    arrowBtn.classList.remove("rotate-90");
    myForm.classList.add("slide-out");
    myForm.classList.remove("slide-in");
    document.getElementById("id").value = ''
    document.getElementById("id").classList.add("hidden")
    setTimeout(() => {
      myForm.style.display = "none";
    }, 100);

    const btn = document.getElementById("addBtn");
    


    btn.value = "Add"
    isRotated = !isRotated;
    isFormVisible = !isFormVisible;
  }
}