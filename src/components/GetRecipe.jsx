import ReactMarkdown from 'react-markdown';

export default function GetRecipe(props) {

    function handleRecipeButtonText() {
        if( props.loading ) {
            return (
                <>
                    <span className="loader"></span> Generating..
                </>
            )
        } else if( props.recipe ) {
            return "Get new recipe"
        } else {
            return "Get a recipe"
        }
    }

    function handlePrintRecipe() {
        window.print()
    }

    return (
        <>
            { props.list.length > 2 && 
                <div className="get-recipe__box">
                    <h3 className="get-recipe__title">Ready to cook?</h3>
                    <div className="get-recipe__flex">
                        <p className="get-recipe__text">Nice! You’ve got enough goodies to cook up something tasty. Hit the button and let the magic happen!</p>
                        <button className="button" onClick={props.toggleRecipeShown}>{handleRecipeButtonText()}</button>
                    </div>
                </div>
            }
            { props.loading && <p>Generating a tasty recipe for you, hang tight.</p> }
            { props.error && <p class="color-danger">Error: {error}</p> }
            { props.recipe && 
                <div className="generated-recipe">
                    <h2 className="generated-recipe__title">Recommended Recipe:</h2>
                    <ReactMarkdown>{ props.recipe }</ReactMarkdown>
                    <footer className="generated-recipe__footer">
                        <button className="button" onClick={handlePrintRecipe}>Print this recipe</button>
                    </footer>
                </div>
            }
        </>
    )
}