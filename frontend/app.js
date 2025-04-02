document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    const addRecipeBtn = document.getElementById('add-recipe-btn');
    const recipeForm = document.getElementById('recipe-form');
    const editForm = document.getElementById('edit-recipe-form');
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');

    // 🟢 Fetch all recipes
    if (recipeList) {
        fetch('http://127.0.0.1:8000/api/recipes/')
            .then(response => response.json())
            .then(data => {
                data.forEach(recipe => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');
                    listItem.innerHTML = `
                        <h3 class="text-xl font-semibold">${recipe.name}</h3>
                        <p class="text-sm text-gray-700">${recipe.ingredients}</p>
                        <a href="recipe-detail.html?id=${recipe.id}" class="text-blue-500">View Details</a>
                    `;
                    recipeList.appendChild(listItem);
                });
            })
            .catch(error => alert('Failed to fetch recipes!'));
    }

    // 🟢 Handle Add Recipe Form Submission
    if (recipeForm) {
        recipeForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                ingredients: document.getElementById('ingredients').value,
                instructions: document.getElementById('instructions').value,
                prep_time: parseInt(document.getElementById('prep_time').value),
                cook_time: parseInt(document.getElementById('cook_time').value)
            };

            fetch('http://127.0.0.1:8000/api/recipes/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Recipe added successfully!');
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Error adding recipe:', error);
                alert('Failed to add recipe!');
            }); 
        });
    }

    // 🟢 Fetch and Display Recipe Details
    if (recipeId && document.getElementById('recipe-name')) {
        fetch(`http://127.0.0.1:8000/api/recipes/${recipeId}/`)
            .then(response => response.json())
            .then(recipe => {
                document.getElementById('recipe-name').textContent = recipe.name;
                document.getElementById('ingredients').textContent = `Ingredients: ${recipe.ingredients}`;
                document.getElementById('instructions').textContent = `Instructions: ${recipe.instructions}`;
                document.getElementById('prep_time').textContent = `Prep Time: ${recipe.prep_time} min`;
                document.getElementById('cook_time').textContent = `Cook Time: ${recipe.cook_time} min`;

                const editBtn = document.getElementById('edit-btn');
                if (editBtn) {
                    editBtn.addEventListener('click', () => {
                        window.location.href = `edit-recipe.html?id=${recipeId}`;
                    });
                }
            })
            .catch(error => alert('Failed to load recipe details!'));
    }

    // 🟢 Handle Edit Recipe Form
    if (recipeId && editForm) {
        fetch(`http://127.0.0.1:8000/api/recipes/${recipeId}/`)
            .then(response => response.json())
            .then(recipe => {
                document.getElementById('recipe-id').value = recipeId;
                document.getElementById('edit-name').value = recipe.name;
                document.getElementById('edit-ingredients').value = recipe.ingredients;
                document.getElementById('edit-instructions').value = recipe.instructions;
                document.getElementById('edit-prep_time').value = recipe.prep_time;
                document.getElementById('edit-cook_time').value = recipe.cook_time;
            })
            .catch(error => alert('Failed to load recipe for editing!'));

        editForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const updatedData = {
                name: document.getElementById('edit-name').value,
                ingredients: document.getElementById('edit-ingredients').value,
                instructions: document.getElementById('edit-instructions').value,
                prep_time: parseInt(document.getElementById('edit-prep_time').value),
                cook_time: parseInt(document.getElementById('edit-cook_time').value)
            };

            fetch(`http://127.0.0.1:8000/api/recipes/${recipeId}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Recipe updated successfully!');
                window.location.href = 'index.html';
            })
            .catch(error => alert('Failed to update recipe!'));
        });
    }

    // 🟢 Redirect to Add Recipe Page
    if (addRecipeBtn) {
        addRecipeBtn.addEventListener('click', () => {
            window.location.href = 'add-recipe.html';
        });
    }
});

// 🟢 Handle Delete Recipe

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');

    if (recipeId) {
        const deleteBtn = document.getElementById('delete-btn');
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this recipe?')) {
                    fetch(`http://127.0.0.1:8000/api/recipes/${recipeId}/`, {
                        method: 'DELETE'
                    })
                    .then(response => {
                        if (response.ok) {
                            alert('Recipe deleted successfully!');
                            window.location.href = 'index.html';
                        } else {
                            alert('Failed to delete recipe!');
                        }
                    })
                    .catch(error => alert('Error deleting recipe!'));
                }
            });
        }
    }
});

listItem.classList.add(
    'bg-white', 'p-4', 'rounded-xl', 'shadow-lg', 'hover:shadow-2xl', 'transition', 'duration-300'
);
listItem.innerHTML = `
    <h3 class="text-xl font-bold text-gray-900">${recipe.name}</h3>
    <p class="text-sm text-gray-600">${recipe.ingredients}</p>
    <a href="recipe-detail.html?id=${recipe.id}" class="text-blue-500 hover:underline">View Details</a>
`;
