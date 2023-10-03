import { API_URL, fetchEmployees, form } from "../app.js"
import { showButton } from "./form.js";

export function newArticle(id, name, salary ){
  let article = document.createElement("article");
  
  //* Elements
  //* --> Data
  const idE = document.createElement("p");
  const nameE = document.createElement("h4");
  const salaryE = document.createElement("p");
  //* --> Containers
  const headerE = document.createElement("header");
  const footerE = document.createElement("footer");
  const sectionE = document.createElement("section");
  //* --> Buttons
  const editE = document.createElement("button");
  const deleteE = document.createElement("button");
  
  //* Texts
  idE.appendChild(document.createTextNode(`${id}`));
  nameE.appendChild(document.createTextNode(`${name}`));
  salaryE.appendChild(document.createTextNode(`Earn $${salary}`));
  editE.appendChild(document.createTextNode("Edit"));
  deleteE.appendChild(document.createTextNode("Delete"));

  //* Styles
  article.classList.add("card");
  headerE.classList.add("header");
  footerE.classList.add("footer")
  sectionE.classList.add("section");

  idE.classList.add("id");

  //* Attributes
  editE.setAttribute('data-id', id);
  deleteE.setAttribute('data-id', id);

  //* Functions
  editE.onclick =  async function () {
    showButton();

    const id = this.getAttribute('data-id');
    
    form.method = "patch";

    fetchEmployees(id).then(employee => {
      const { id, name, salary} = employee;
      
      document.getElementById("id").value = id
      document.getElementById("name").value = name
      document.getElementById("salary").value = salary
      document.getElementById("addBtn").value = "Edit Employee"
    });
  }

  deleteE.onclick = async function () {
    const id = this.getAttribute('data-id');

    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    console.log("Empleado Eliminado!");
  }
  
  //* AppendChilds
  sectionE.append(nameE, salaryE);
  headerE.append(idE, sectionE);
  footerE.append(editE, deleteE);
  article.append(headerE, footerE);

  return article;
}
