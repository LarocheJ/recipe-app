export default function Footer() {
    const today = new Date();
    
    return(
        <footer>©{today.getFullYear()} Recipe Generator App by Jimmy Laroche</footer>
    )
}