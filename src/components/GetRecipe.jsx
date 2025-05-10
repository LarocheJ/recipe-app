import ReactMarkdown from 'react-markdown';

export default function GetRecipe(props) {
    return (
        <>
            { props.list.length > 2 ? <button className="button" onClick={props.toggleRecipeShown}>Get a recipe</button> : null }
            { props.loading && <p>Generating a tasty recipe for you, hang tight.</p> }
            { props.error && <p class="color-danger">Error: {error}</p> }
            { props.recipe && 
                <div className="generated-recipe">
                    <h2 className="generated-recipe__title">Recommended Recipe:</h2>
                    <ReactMarkdown>{ props.recipe }</ReactMarkdown>
                    <footer className="generated-recipe__footer">
                        <p>Not a fan of this recipe?</p>
                        <button className="button" onClick={props.toggleRecipeShown}>Get a new one!</button>
                    </footer>
                </div>
            }
        </>
    )
}