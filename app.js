import { newArticle } from "./components/index.js";

const API_URL = "https://employeeapp-lw7c.onrender.com";

const content = document.getElementById("content");

//* Get
async function fetchEmployees() {
  const response = await fetch(`${API_URL}/api/employees`)
  .then((res) => res.json())
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
