export default function IngredientsList(props) {
    function removeIngredient(indexToRemove) {
        const removedIngredient = props.list[indexToRemove];
        
        props.setIngredients(prevIngredients => {
            return prevIngredients.filter((_, index) => index !== indexToRemove);
        })

        // Re-enable the button if it was a popular ingredient
        props.setDisabledIngredients(prevSet => {
            const newSet = new Set(prevSet);
            newSet.delete(removedIngredient);
            return newSet;
        });
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