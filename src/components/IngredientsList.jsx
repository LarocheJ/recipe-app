export default function IngredientsList(props) {
    function removeIngredient(ingredientToRemove) {
        props.setIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient !== ingredientToRemove))
    }

    // function removeAllIngredients() {
    //     props.setIngredients([])
    // }

    return (
        <>
            {props.list.length > 0 && <div className="ingredients__container">
                <h2 className="ingredients">Ingredients on hand:</h2>
                <ul className="ingredients__list">
                    {props.list.map((ingredient, index) => {
                        return <li key={index} className="ingredients__item">{ingredient} <button onClick={() => removeIngredient(ingredient)} className="button button--remove-small" title={`Remove ${ingredient} from the ingredients list`}>x</button></li>
                    })}
                </ul>
                {/* <button className="button button--remove" onClick={removeAllIngredients}>Remove ingredients</button> */}
            </div> }
        </>
    )
}