import { newArticle } from "./components/index.js";

export const API_URL = "https://employeeapp-lw7c.onrender.com";

const content = document.getElementById("content");

//* Get
async function fetchEmployees() {
  const response = await fetch(`${API_URL}/api/employees`);
  return await response.json();
}

fetchEmployees().then(employee => {
  if(Object.keys(employee) === 0) return content.textContent('Employees list is empty');

  employee.map(e => {
    const { id, name, salary } = e;   
    const a = newArticle(id, name, salary)

    content.appendChild(a);
  });
});

//* Post
const form = document.getElementById("addEmployee");

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

  const values = {
    name: formData.get("name"),
    salary: formData.get("salary")
  }

  try {
    let response = await fetch(`${API_URL}/api/employees`, {
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
    window.location.reload();
    form.reset();
  } catch (error) {
    console.error(error);
  }
}

//* Update
export function requestPatch(id) {
  const apiUrl = `${API_URL}/${id}`;

  const form = document.createElement("form");

  const values = {  
    name: form.get("name"),
    salary: form.get("salary")  
  };

  const options = {
    method: 'PATCH',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values)
  };

  fetch(apiUrl, options)
    .then(res => {
      if(!res.ok) throw new Error('PATCH request failed!');
      return res.json
    })
    .then(data => {
      console.log('Server response: ', data);
    })
    .catch(error => {
      console.error(error);
    });
}

//* Delete

