document.addEventListener("DOMContentLoaded", function() {
    const recipeNameInput = document.getElementById("recipeName");
    const recipeIngredientsInput = document.getElementById("recipeIngredients");
    const addRecipeBtn = document.getElementById("addRecipeBtn");
    const recipeList = document.getElementById("recipeList");

    addRecipeBtn.addEventListener("click", function() {
        const recipeName = recipeNameInput.value.trim();
        const recipeIngredients = recipeIngredientsInput.value.trim();

        if (recipeName !== "" && recipeIngredients !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${recipeName}</strong>: ${recipeIngredients}
                <button class="deleteBtn">Delete</button>
            `;
            recipeList.appendChild(li);

            recipeNameInput.value = "";
            recipeIngredientsInput.value = "";
        } else {
            alert("Please enter both recipe name and ingredients!");
        }
    });

    recipeList.addEventListener("click", function(event) {
        if (event.target.classList.contains("deleteBtn")) {
            event.target.parentElement.remove();
        }
    });
});
