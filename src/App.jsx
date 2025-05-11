import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import IngredientsForm from './components/IngredientsForm'
import IngredientsList from './components/IngredientsList'
import GetRecipe from './components/GetRecipe'
import { generateRecipe } from './ai'

function App() {
	const [ingredients, setIngredients] = React.useState([]);
	const [recipeShown, setRecipeShown] = React.useState(false)
	const [recipe, setRecipe] = React.useState("");
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState(null)
	

	async function handleRecipe() {
		setLoading(true)
		setError(null)
		try {
			const recipeText = await generateRecipe(ingredients);
			setRecipe(recipeText)
		} catch (error) {
			console.log("Failed to generate recipe: ", error)
			setError("Failed to generate recipe. Please try again.")
			setRecipe(null)
		} finally {
			setLoading(false)
		}
	}

    function toggleRecipeShown() {
        if( !recipeShown && !loading ) {
            handleRecipe()
        } else {
            setRecipeShown(prevShown => !prevShown)
        }
    }



	return(
		<>
			<div className="wrapper">
				<Header />
				<main>
					<IngredientsForm setIngredients={setIngredients} />
					<IngredientsList list={ingredients} setIngredients={setIngredients} />
					<GetRecipe 
						list={ingredients} 
						recipe={recipe} 
						recipeShown={recipeShown} 
						handleRecipe={handleRecipe} 
						toggleRecipeShown={toggleRecipeShown} 
						loading={loading} 
						error={error}
					/>
				</main>
			</div>
			<Footer />
		</>
	)
}

export default App
