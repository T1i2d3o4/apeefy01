import './experience.css';
import{motion} from "framer-motion";
const Experience = () => {
return (
 <>
 <div className='experience'>
    <p className='exp'>EXPERIENCES</p>
    <div className='image'>
     <img className='carre' src="format.png" alt="carre" />
     <div className='ecrit'>
      <p className='ca'>+ 8 <br /> </p>
      <h6 > PROJETS ACCOMPLIS </h6> 
     </div>
      <div className='effacement'></div>
    </div>
<div className='imag'>
    <img className='car' src="format.png" alt="carre" />
    <div className='pa'>
        <p className='ca'>+5 <br /> </p>
        <h6 >CLIENTS SATISFAITS</h6>
    </div>
    <div className='efface'></div>
</div>
 </div>
 </>
 )
}
export default Experience;