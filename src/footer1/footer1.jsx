
import './footer1.css';

function Footer() {
    return(
        <>
        <div className='foot'>  
            <div className='div'>
                <img src="/logo.png" alt='' className='logo'/><a href='#'></a>
                <p id='pr'>une equipe dédiée à vos cotés à chaque étape pour concrétiser vos ambitions.</p>
               
            </div>
            <div className='div'>
                <h3>SERVICE</h3>
                <p id='pr'>DEVELOPPEMENT WEB <br />  DEVELOPPEMENT MOBILE</p>
              
            </div>
            <div className='div'>
                <h3>MENU</h3>
                <p id='pr'> <a href="/home"> ACCUEIL</a> <br /> <a href="/about">A PROPOS</a> <br /> <a href="/contact">CONTACT</a>  </p>
            </div>
            <div className='div'>
                <h3> CONTACTS</h3>
                <p id='pr'> 
                    <img src="/gh.jpg" alt=""className='icone' /><a href="#"> gitHub</a> <br /> <br />
                    <img src="/face.jpg" alt=""className='icone' /><a href="#" >FACEBOOK</a> <br /> <br />
                    <img src="/mail.jpg" alt=""className='icone' /><a href="#" >EMAIL </a><br /> <br />
                    <img src="/tel.jpg" alt=""className='icone' />+237 676161404 <br /><br />
                    <img src="/teleg.jpg" alt=""className='icone' /><a href="#" >TELEGRAM</a>
                    </p>
              
            </div>
            
        </div>
        </>

    );
    
}
export default Footer;