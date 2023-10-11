
export function checkInputError(name, salary) {
  
  const pattern = /^[a-z]+$/i;
  
  if(pattern.test(name) === false || salary === ""){
    const section = document.createElement("div");
    section.classList.add("error");

    const error = document.createElement("p");
    error.textContent = "Got to be a real employee";
    
    section.appendChild(error);
    
    const content = document.getElementById("addEmployee");
    content.appendChild(section);
    
    return setTimeout(() => {
      section.remove();
    }, 3000)
  }
}