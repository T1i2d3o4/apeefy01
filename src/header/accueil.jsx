import './accueil.css';
import fond from './images/fond.png';
import {motion} from 'framer-motion';
const Accueil = () => {
    return (
 <>
      <div className='acc'>
        <nav className='accueil'>
            <div className='logo'>
                <img className='id' src="/logo.png" alt="Logo" />
            </div>
            <ul className='menu'  >
                <li><a href="/accueil">accueil</a></li>
                <li><a href="#te" >service</a></li>
                <li><a href="#contact">à propos</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>
        <p className='argence'>Votre agence de developpement web & mobile</p>
        <h1 className='animated'> DU CONCEPT A L'APPLICATION,ON CODE VOTRE SUCCES</h1>
         <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
         <br /><br /><br /><br />

        </div>
        </> 
    )
}
export default Accueil;