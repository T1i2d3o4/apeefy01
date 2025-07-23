
import './contact.css';
import {motion} from 'framer-motion';

function Contact(){
    return (
        <div className="contact-container" >
            <div className="contact-form">
                <div className='c'>CONTACTER-NOUS</div>
                <form>
                    <label>Nom complet</label>
                    <input type="text" placeholder="" name='nom' minLength={"5"} maxLength={"30"} pattern='^[0-9]+$' title='le nom ne doit pas contenir de chiffre'  required></input>
                    <label>Email</label>
                    <input type="emeil" placeholder="" name='email' required></input>
                    <label>Message</label>
                    <textarea placeholder="" name='message' maxLength={"500"} required></textarea>
                    <button type="submit" className='envoie'>Evoyer</button> 
                     
                </form>
                <div className='trait-vertical'></div>
                <div className='contact-info'>
                  <h1>Nos coordonnées</h1>
                  <p className='loca'>Localisation:Douala-Cameroun</p>
                  <p className='tel'> Tel:+23794482719</p>
                  <p className='email'>email:</p>
                
                </div>

            </div>
            <div className='trait-verticale'></div>
            <div className='contact'>
                <p id='contact'> 
                  <img src="/gh.jpg" alt=""className='icone' /><a href="#" className='lien'> gitHub</a> <br /> <br />
                  <img src="/face.jpg" alt=""className='icone' /><a href="#" className='lien'>FACEBOOK</a> <br /> <br />
                  <img src="/mail.jpg" alt=""className='icone' /><a href="#" className='lien'>EMAIL </a><br /> <br />
                  <img src="/tel.jpg" alt=""className='icone' />+237694016195 <br /><br />
                  <img src="/teleg.jpg" alt=""className='icone' /><a href="#" className='lien'>TELEGRAM</a>
                </p>
            </div> 
            <div className='infor'>
                    <img className='ima'
                       src="https://tse3.mm.bing.net/th/id/OIP.KrNtouiIGqMa8uAJOoDozAHaFF?pid=ImgDet&w=474&h=325&rs=1&o=7&rm=3"
                       alt="image vue sur bing"
                        width="300"
                   />
                    <img
                        className="js"
                        src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png"
                        alt="Logo JavaScript"
                        width="200"
                    />
               <h2 className='animated'>MERCI DE NOUS AVOIR CONTACTEES</h2>
                   <div className='horizontal-ligne'></div>
                   <div className='horizont-ligne'></div>
 
             </div>


        </div>
        

    );

};

export default Contact;