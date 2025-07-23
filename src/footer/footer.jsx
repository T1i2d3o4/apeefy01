import {motion} from 'framer-motion';
import './footer.css';

function Footer() {
    return(
        <>
        <motion.div className='foot'>  
            <div className='div'>
 PROJET
                <img src='logo.png' alt='logo' className='logo'/>

                <img src='/image.png' alt='logo' className='logo'/>
 main
                <p id='pr'>une equipe dédiée à vos cotés à chaque étape pour concrétiser vos ambitions.</p>
               
            </div>
            <div className='div'>
                <h3>SERVICE</h3>
                <p id='pr'>DEVELOPPEMENT WEB <br />  DEVELOPPEMENT MOBILE</p>
              
            </div>
            <div className='div'>
                <h3>MENU</h3>
 PROJET
                <p id='pre'> 
                    <a href="/accueil" className='lien'> ACCUEIL</a> <br /> 
                    <a href="#te"className='lien' >SERVICE</a> <br /> 
                    <a href="/about" className='lien'>A PROPOS</a> <br /> 
                    <a href="/contact" className='lien'>CONTACT</a> 

                <p id='pr'> 
                    <a href="/home"className='lien'> ACCUEIL</a> <br /> 
                    <a href="/service"className='lien'> SERVICE</a> <br /> 
                    <a href="#apropos"className='lien' >A PROPOS</a> <br /> 
                    <a href="/contact"className='lien'>CONTACT</a>  
 main
                </p>
            </div>
            <div className='div'>
                <h3> CONTACTS</h3>
                <p id='pr'> 
                    <img src="/gh.jpg" alt=""className='icone' /><a href="https://github.com/stehie005" className='lien'> gitHub</a> <br /> <br />
 PROJET
                    <img src="/face.jpg" alt=""className='icone' /><a href="https://www.facebook.com/share/19bJ5NDTb8" target='_blank' rel='noopener noreferrer'  className='lien'>FACEBOOK</a> <br /> <br />
                    <img src="/mail.jpg" alt=""className='icone' /><a href="mailto:stephienguena5@gmail.com"  className='lien'>EMAIL </a><br /> <br />
                    <img src="/tel.jpg" alt=""className='icone' /><a href='tel:+237676161404' className='lien'> +237 676161404 <br /></a>
                    <img src="/teleg.jpg" alt=""className='icone' /><a href="https://t.me/RICHEL.TSOBENG" target='_blank' rel='noopener noreferrer'  className='lien'>TELEGRAM</a>

                    <img src="/face.jpg" alt=""className='icone' /><a href="https://www.facebook.com/richel.tsobeng" className='lien'>FACEBOOK</a> <br /> <br />
                    <img src="/mail.jpg" alt=""className='icone' /><a href="#" className='lien'>EMAIL </a><br /> <br />
                    <img src="/tel.jpg" alt=""className='icone' /><a href="tel:+237 676161404" className='lien'>+237 676161404 </a><br /><br />
                    <img src="/teleg.jpg" alt=""className='icone' /><a href="https://t.me/RICHEL.TSOBENG" className='lien'>TELEGRAM</a>
 main
                    </p>
              
            </div>
            
            <p id='p'> Copyright ©APEEFY 2025</p>
        </motion.div>
        </>

    );
    
}
export default Footer;