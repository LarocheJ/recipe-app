import ReactMarkdown from 'react-markdown';

export default function GetRecipe(props) {

    function resetRecipe() {
        props.setRecipe(null)
        props.setRecipeShown(false)
        props.setIngredients([])
    }

    function handlePrintRecipe() {
        window.print()
    }

    return (
        <>
            { props.list.length > 2 && !props.recipe && 
                <div className="get-recipe__box">
                    <h3 className="get-recipe__title">Ready to cook?</h3>
                    <div className="get-recipe__flex">
                        <p className="get-recipe__text">Nice! You’ve got enough goodies to cook up something tasty. Hit the button and let the magic happen!</p>
                        {props.loading ? <button className="button button--disabled">Generating <span className="loader"></span></button> : <button className="button" onClick={props.toggleRecipeShown}>Get recipe</button>}
                    </div>
                </div>
            }
            { props.error && <p class="color-danger">Error: {props.error}</p> }
            { props.recipe && 
                <div className="generated-recipe">
                    <h2 className="generated-recipe__title">Recommended Recipe:</h2>
                    <ReactMarkdown>{ props.recipe }</ReactMarkdown>
                    <footer className="generated-recipe__footer">
                        <button className="button" onClick={handlePrintRecipe}>Print this recipe</button>
                        <button className="button button--secondary" onClick={resetRecipe}>Get new recipe</button>
                    </footer>
                </div>
            }
        </>
    )
}