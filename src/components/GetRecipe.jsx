export default function GetRecipe(props) {
    return (
        <>
            {props.list.length > 2 ? <button className="button" onClick={props.toggleRecipeShown}>Get a recipe</button> : null}
            <div className="generated-recipe">
                <h2 className="generated-recipe__title">Recommended Recipe:</h2>
                {props.recipe}
            </div>
        </>
    )
}