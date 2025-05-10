export default function ingredientsForm(props) {
    function addIngredient(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        const formData = new FormData(event.target);
        const ingredient = formData.get("ingredient");

        if (ingredient) {
            props.setIngredients((prevIngredients) => {
                return [...prevIngredients, ingredient];
            });

            // Optionally clear the input field after adding
            event.target.reset();
        }
    }

    return (
        <form onSubmit={addIngredient} className="ingredients-form">
            <p>Got some ingredients lying around? Add at least 3 to whip up a surprise recipe! Just type them in and hit the + or press Enter to add them to your stash.</p>
            <label htmlFor="ingredient">Ingredients</label>
            <div className="ingredients-form__group">
                <input className="ingredients-form__input" type="text" name="ingredient" placeholder="e.g. chicken, garlic, rice" required />
                <button className="ingredients-form__button" type="submit" title="Add ingredient">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </button>
            </div>
        </form>
    );
}