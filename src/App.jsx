import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import IngredientsForm from './components/IngredientsForm'
import IngredientsList from './components/IngredientsList'
import GetRecipe from './components/GetRecipe'
import { generateRecipe } from './ai'

function App() {
	const [ingredients, setIngredients] = React.useState(["oregano", "paprika", "salt"]);

	const [recipeShown, setRecipeShown] = React.useState(false)

	const [recipe, setRecipe] = React.useState("");

	async function handleRecipe() {
		const recipeText = await generateRecipe(ingredients);
		setRecipe(recipeText ? recipeText : "Sorry, I was not able to generate a recipe.");
	}

    function toggleRecipeShown() {
        if( !recipeShown && !recipe ) {
            handleRecipe()
        } else {
            setRecipeShown(prevShown => !prevShown)
        }
    }

	return(
		<div className="wrapper">
			<Header />
			<main>
				<IngredientsForm setIngredients={setIngredients} />
				<IngredientsList list={ingredients} setIngredients={setIngredients} />
				<GetRecipe list={ingredients} recipe={recipe} handleRecipe={handleRecipe} toggleRecipeShown={toggleRecipeShown} />
			</main>
			<Footer />
		</div>
	)
}

export default App
