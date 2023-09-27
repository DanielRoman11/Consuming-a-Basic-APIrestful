export function newArticle(id, name, salary ){
  let article = document.createElement("article");
  
  //* Elements
  const idE = document.createElement("p");
  const nameE = document.createElement("h3");
  const salaryE = document.createElement("p");
  const headerE = document.createElement("header");
  const editE = document.createElement("button");
  const deleteE = document.createElement("button");
  
  //* Texts
  idE.appendChild(document.createTextNode(`${id}`));
  nameE.appendChild(document.createTextNode(`Name: ${name}`));
  salaryE.appendChild(document.createTextNode(`Salary: ${salary}`));
  editE.textContent("Edit");
  deleteE.textContent("Delete");

  //* Styles
  article.classList.add("card");
  idE.classList.add("id");

  //* AppendChilds
  article.append(idE, headerE);


  return article;
}
