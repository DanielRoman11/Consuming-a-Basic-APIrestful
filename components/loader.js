
export function loader()  {
  const form = document.getElementById("addEmployee")
  
  const loader = document.createElement("div");
  loader.classList.add("loader");

  
  visibility === false
    ? loader.classList.remove("hidden") 
    : loader.classList.add("hidden")

  form.appendChild(loader);
}


