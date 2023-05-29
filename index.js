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
    const section = document.createRange().createContextualFragment(
      /*html*/`
      <div class="empleado-container">
        <h3>Nombre: ${employee.name}</h3>
        <p>Salario: ${employee.salary}</p>
      </div>
      `
    );
    const content = document.getElementById("content");

    content.append(section)
  });
})

const showBtn = document.getElementById("showBtn");

function showForm(e) {
  const form = document.querySelector("form[id = 'addEmployee']");
  const formStyle = window.getComputedStyle(form)

  return formStyle.left ? form.style.animation = "showForm 2s ease-in-out;" ? setTimeout(form.style.left = "64px", 1200) : form.style.left = "64px" : form.style.left = "-400px"
}

showBtn.addEventListener("click", e => showForm())
