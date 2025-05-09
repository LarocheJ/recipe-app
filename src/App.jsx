import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import IngredientsForm from './components/IngredientsForm'
import IngredientsList from './components/IngredientsList'
import GetRecipe from './components/GetRecipe'

function App() {
	const [ingredients, setIngredients] = React.useState(["oregano", "paprika", "salt"]);

	return(
		<div className="wrapper">
			<Header />
			<main>
				<IngredientsForm setIngredients={setIngredients} />
				<IngredientsList list={ingredients} setIngredients={setIngredients} />
				<GetRecipe list={ingredients} />
			</main>
			<Footer />
		</div>
	)
}

export default App
