function addRecipe() {
    const name = document.getElementById("recipe-name").value;
    const description = document.getElementById("recipe-description").value;
  
    if (name && description) {
      const recipesSection = document.getElementById("recipes");
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = 
        <><h3>${name}</h3><p>${description}</p></>
      ;
      recipesSection.appendChild(recipeDiv);
  
      // Clear input fields
      document.getElementById("recipe-name").value = "";
      document.getElementById("recipe-description").value = "";
    } else {
      alert("Please enter recipe name and description.");
    }
  }