import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import IngredientsForm from './components/IngredientsForm'
import IngredientsList from './components/IngredientsList'
import GetRecipe from './components/GetRecipe'
import Disclaimer from './components/Disclaimer';
import { generateRecipe } from './ai'

function App() {
	const [ingredients, setIngredients] = React.useState([]);
	const [recipeShown, setRecipeShown] = React.useState(false)
	const [recipe, setRecipe] = React.useState("");
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState(null)
	const [disabledIngredients, setDisabledIngredients] = React.useState(new Set());

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
					<IngredientsForm 
						setIngredients={setIngredients} 
						disabledIngredients={disabledIngredients} 
						setDisabledIngredients={setDisabledIngredients} 
					/>
					<IngredientsList 
						list={ingredients} 
						setIngredients={setIngredients} 
						disabledIngredients={disabledIngredients} 
						setDisabledIngredients={setDisabledIngredients} 
					/>
					<GetRecipe 
						list={ingredients} 
						recipe={recipe} 
						setRecipe={setRecipe} 
						setIngredients={setIngredients} 
						recipeShown={recipeShown} 
						setRecipeShown={setRecipeShown} 
						handleRecipe={handleRecipe} 
						toggleRecipeShown={toggleRecipeShown} 
						loading={loading} 
						error={error}
						disabledIngredients={disabledIngredients} 
						setDisabledIngredients={setDisabledIngredients} 
					/>
				</main>
			</div>
			<Disclaimer />
			<Footer />
		</>
	)
}

export default App
