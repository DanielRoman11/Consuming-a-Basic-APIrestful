async function getEmployees(done) {
  fetch("https://backend-node-production-4066.up.railway.app/api/employees/") 
  .then(response => {
    if(!response.ok){
      throw new Error("Network response was NOT ok 🙅‍♂️")
    }
    return response.json()
  })
  .then(data => {
    
    if(data === null){
      throw new Error("Data is null")
    } 
    return done(data)
  })
  .catch(error => {
    console.log('There was an error:', error);
  });
}

const form = document.getElementById("addEmployee");

getEmployees(data => {
  data.forEach(employee => {
    const section = document.createElement("div");
    section.classList.add("empleado-container");

    const idElement = document.createElement("p");
    const nameElement = document.createElement("h3");
    const salaryElement = document.createElement("p");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    
    
    idElement.textContent = `ID: ${employee.id}`
    nameElement.textContent = `Nombre: ${employee.name}`;
    salaryElement.textContent = `Salario: ${employee.salary}`;
    
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("button", "deleteBtn");
    
    editButton.textContent = "Edit";
    editButton.classList.add("button", "editBtn");

    section.append(idElement, nameElement, salaryElement, deleteButton, editButton);

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