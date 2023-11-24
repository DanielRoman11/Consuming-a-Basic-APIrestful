import { checkInputError } from "./components/error.js";
import { hideButton } from "./components/form.js";
import { newArticle } from "./components/index.js";

export const API_URL = "https://backend-node.3.us-1.fl0.io/api/employees";

const content = document.getElementById("content");

const body = document.body;
const loader = document.createElement("div");
loader.classList.add("loader");

body.appendChild(loader)
//* HTTP GET VERB
export async function fetchEmployees(id) {
  try {
    id === undefined ? id = "" : id
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}

fetchEmployees().then(employee => {
  body.removeChild(loader)
  if(employee.length || employee !== undefined ){
  return employee.map(e => {
    const { id, name, salary } = e;   
    const a = newArticle(id, name, salary)

    content.appendChild(a);
  })
  }
  content.style.color = "white"
  content.innerText = "No employees to show"
});

//* Post
export let form = document.getElementById("addEmployee");

form.action = API_URL

form.onsubmit = async e => {
  e.preventDefault();
  
  try {
    const formulario = new FormData(form);
    
    const id = document.getElementById("id").value
    const nombre = formulario.get("name");
    const salario = formulario.get("salary");

    //? Checks errors in form inputs
    if(checkInputError(nombre, salario)) return;
    
    const values = {
      name: nombre,
      salary: salario
    }
    form.reset();

    hideButton();
    //* HTTP PATCH VERB
    if(id){
      body.appendChild(loader);
      content.classList.add("hidden");

      await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Accept": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      fetchEmployees().then(employee => {  
        if(Object.keys(employee).length === 0) content.textContent = "No employees to show"
        
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
      content.classList.remove("hidden");
      body.removeChild(loader);
    }
    //* HTTP POST VERB
    if(!id) {
      body.appendChild(loader);
      content.classList.add("hidden");

      content.innerText = ""

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
      content.classList.remove("hidden");
      body.removeChild(loader);
    }
  } catch (error) {
    console.error('There was an error: ', error);
  }
}



