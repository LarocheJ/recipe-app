import logo from '../assets/recipe-gen-logo.svg';

export default function Header() {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="" />
            <h1 className="header__title">Recipe Generator</h1>
        </header>
    )
}