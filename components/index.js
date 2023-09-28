import { requestPatch } from "../app.js";

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

  //* Functions
  editE.onclick = function () {
    getEmployeeID(this)
  }
  
  //* AppendChilds
  sectionE.append(nameE, salaryE);
  headerE.append(idE, sectionE);
  footerE.append(editE, deleteE);
  article.append(headerE, footerE);

  return article;
}

export function getEmployeeID(button){
  const id = button.getAttributte('data-id');
  requestPatch(id)
}
