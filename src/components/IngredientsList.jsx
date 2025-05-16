export default function IngredientsList(props) {
    function removeIngredient(indexToRemove) {
        props.setIngredients(prevIngredients => {
            return prevIngredients.filter((_, index) => index !== indexToRemove);
        })
    }

    return (
        <>
            {props.list.length > 0 && <div className="ingredients__container">
                <h2 className="ingredients">Ingredients on hand:</h2>
                <ul className="ingredients__list">
                    {props.list.map((ingredient, index) => {
                        return <li key={index} className="ingredients__item">{ingredient} <button onClick={() => removeIngredient(index)} className="button button--remove-small" title={`Remove ${ingredient} from the ingredients list`}>x</button></li>
                    })}
                </ul>
            </div> }
        </>
    )
}