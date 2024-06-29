import recipes from "./recipes.mjs";   

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

function getRandomList(list) {
    const listLength = list.length;
    const randomNum = randomNumber(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
	return `<img src="${recipe.image}" alt="${recipe.name}">
            <section class="recipe-content">
                <p class="tag">${tagsTemplate(recipe.tags)}</p>
                <p class="name">${recipe.name}</p>
    
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                   ${ratingTemplate(recipe.rating)}
                </span>

                <p class="description">${recipe.description}</p> 
        </section>
        `;
}

function tagsTemplate(tags) {
    let html = '';
    tags.forEach( tags => {
        html += `<li>${tags}</li>`
    });

    return html;
}

function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`

// our ratings are always out of 5, so create a for loop from 1 to 5
for (let i = 1; i <= 5; i++) 
{
    // check to see if the current index of the loop is less than our rating
	// if so then output a filled star
    if (i <= rating) 
    {
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    }
    // else output an empty star
    else
    {
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
}
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
    const recipeContent = document.querySelector('.recipe-section');
    recipeContent.innerHTML = '';

    recipeList.forEach(recipe => {
        recipeContent.innerHTML += recipeTemplate(recipe);
    });
}

function init() {
    const recipe = getRandomList(recipes)

    renderRecipes([recipe]);

    const search = document.getElementById('search');
    search.addEventListener('submit', searchHandler);
}

init();

function filter(query) {
    const filter = recipes.filter(recipe => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))) ||
            (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery)))
        );
    });

    const sorted = filter.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault(); 
    const search = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = filter(search);
    renderRecipes(filteredRecipes);
}