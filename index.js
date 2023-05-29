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
    const section = document.createElement("div");
    section.classList.add("empleado-container");

    const nameElement = document.createElement("h3");
    nameElement.textContent = `Nombre: ${employee.name}`;

    const salaryElement = document.createElement("p");
    salaryElement.textContent = `Salario: ${employee.salary}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("button", "deleteBtn");
    

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("button", "editBtn");
    
    section.appendChild(nameElement);
    section.appendChild(salaryElement);
    section.appendChild(deleteButton);
    section.appendChild(editButton);

    const content = document.getElementById("content");
    content.appendChild(section);
  });
});



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