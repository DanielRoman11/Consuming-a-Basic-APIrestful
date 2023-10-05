import { newArticle } from "./components/index.js";

export const API_URL = "https://backend-node-plea-dev.fl0.io/api/employees";

const content = document.getElementById("content");


//* Get
export async function fetchEmployees(id) {
  id === undefined ? id = "" : id
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
}

fetchEmployees().then(employee => {
  employee.map(e => {
    const { id, name, salary } = e;   
    const a = newArticle(id, name, salary)

    content.appendChild(a);
  });
});

//* Post
export let form = document.getElementById("addEmployee");

form.action = API_URL

console.log(form.action);
form.onsubmit = async e => {
  e.preventDefault();
  
  try {
    const formulario = new FormData(form);
    
    const id = document.getElementById("id").value
    const nombre = formulario.get("name");
    const salario = formulario.get("salary");

    
    if(nombre === "" || salario === ""){
      const section = document.createElement("div");
      section.classList.add("error");
      const error = document.createElement("p");
      error.textContent = "Todos los campos son necesarios"
      
      section.appendChild(error)

      
      const content = document.getElementById("addEmployee");
      content.appendChild(section);
      
      return setTimeout(() => {
        section.remove();
      }, 3000)
    }
    
    const values = {
      name: nombre,
      salary: salario
    }
    form.reset();

    if(id){
      console.log("Editando...");
      await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      fetchEmployees().then(employee => {  
        if(Object.keys(employee).length === 0) return content.textContent('Employees list is empty');
  
        employee.map((e, i) => {
          if(i < content.childElementCount){
            const { id, name, salary } = e;   
            const newNode = newArticle(id, name, salary);
            const previewNode = content.childNodes[i];
  
            // console.log(i);
            content.replaceChild(newNode, previewNode)
          }
        });
      });
      
      console.log("Editado👌!");

    }
    if(!id) {
    console.log("Subiendo...");

    await fetch(`${API_URL}`, {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });

    fetchEmployees().then(employee => {  
      if(Object.keys(employee).length === 0) return content.textContent('Employees list is empty');

      employee.map((e, i) => {
        if(i === content.childElementCount){
          const { id, name, salary } = e;   
          const newNode = newArticle(id, name, salary);

          content.appendChild(newNode)
        }
      });
    });

    console.log("Empleado creado con Éxito!👌...");
    }
  } catch (error) {
    console.error('There was an error: ', error);
  }
}
