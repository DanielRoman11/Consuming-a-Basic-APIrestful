async function getEmployees(done) {
  fetch("https://employeeapp-lw7c.onrender.com/api/employees") 
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

//* GET Method
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


const form = document.getElementById("addEmployee")
//* POST Method
form.onsubmit = async e => {
  e.preventDefault();

  const formData = new FormData(form);

  if(formData.get("name") === "" || formData.get(salary) === ""){
    const section = document.createElement("div");
    section.classList.add("error");
    const error = document.createElement("p");
    error.textContent = "Todos los campos son necesarios"

    section.appendChild(error)

    const content = document.getElementById("addEmployee");
    return content.appendChild(section);
  }
  const error = document.getElementsByClassName("error")
  if(error[0]){
    const content = document.getElementById("addEmployee");
    content.removeChild(error[0]);
  }

  const values = {name: formData.get("name") ,salary: formData.get("salary")}

  let response = await fetch("https://backend-node-production-4066.up.railway.app/api/employees", {
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(values),
  });

  let result = await response.json();

  console.log(result);

  console.log("Enviado 🙆");
  window.location.reload()
  form.reset()
}