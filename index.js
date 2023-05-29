async function getEmployees(done) {
  fetch("https://backend-node-production-4066.up.railway.app/api/employees/", {

  }) 
  .then(response => response.json())
  .then(data => {
    done(data)
  })
  .catch(error => {
    console.log('Ha ocurrido un error:', error);
  });
}

getEmployees(data => {
  data.forEach(employee => {
    const section = document.createRange().createContextualFragment(
      /*html*/`
      <div class="empleado-container">
        <h3>Nombre: ${employee.name}</h3>
        <p>Salario: ${employee.salary}</p>
      </div>
      `
    );
    const content = document.getElementById("content");

    content.append(section)
  });
})

const showBtn = document.getElementById("showBtn");

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
    myForm.classList.add("slide-in");
    myForm.classList.remove("slide-out");
    myForm.style.display = "flex";
  } else {
    myForm.classList.add("slide-out");
    myForm.classList.remove("slide-in");
    setTimeout(() => {
      myForm.style.display = "none"; // Ocultar el formulario después de la animación
    }, 500); // Ajusta este valor para que coincida con la duración de la transición en segundos
  }
});