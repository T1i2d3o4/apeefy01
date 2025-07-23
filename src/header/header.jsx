
import './header.css';

function Header() {
    return(
        <header>
        <>
        <nav className='contact'>
            {/* logo à gauche */}
            <div className="logo">
                <img id='logo' src="/logo.png" alt="Logo Apeefy" />
            </div>
            <div>
                <ul className='menu'>
                    <li><a href="#service">ACCUEIL</a></li>
                    <li><a href="#about">SERVICES</a></li>
                    <li><a href="#contact">A PROPOS</a></li>
                    <li><a href="#contact">CONTACT</a></li>

                </ul>
                </div>
        </nav>
        <div className='sous-titre'>
            <p>Votre agence de developpement web et mobile</p>
            </div>
       </>
       </header>
    );
};
export default Header ;