export default function GetRecipe(props) {
    return (
        <>
            {props.list.length > 2 ? <button className="button">Get a recipe</button> : null}
        </>
    )
}