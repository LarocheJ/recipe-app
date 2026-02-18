export default function Footer() {
    const today = new Date();
    
    return(
        <>
            <hr />
            <footer className="footer"><small>©{today.getFullYear()} Recipe Generator App by Jimmy Laroche.</small></footer>
        </>
    )
}