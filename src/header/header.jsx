
import './header.css';
import { motion } from 'framer-motion';


function Navbar  ()  {
  return (
    <>
    <motion.nav
    
      
     className="navbar">
      <motion.div className="logo">
        <img  src="/image.png" alt="logo" />
        
      </motion.div>
      <motion.ul
        
        
       className="menu">
        <motion.li 
         whileHover={{scale: 1.4,  }} 
         transition={{type: 'keyframes', stiffness:100, duration: 0.5}}
         style={{fontSize:'15px',cursor:'pointer',display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a href="/home"> ACCUEIL</a></motion.li>
        <motion.li 
         whileHover={{scale: 1.4,  }} 
         transition={{type: 'keyframes', stiffness:100, duration: 0.5}}
         style={{fontSize:'15px',cursor:'pointer',display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a href="/about">SERVICE</a></motion.li>
        <motion.li
         whileHover={{scale: 1.4,  }} 
         transition={{type: 'keyframes', stiffness:100, duration: 0.5}}
         style={{fontSize:'15px',cursor:'pointer',display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a href="/about">A-PROPOS</a></motion.li>
        <motion.li 
         whileHover={{scale: 1.4,  }} 
         transition={{type: 'keyframes', stiffness:100, duration: 0.5}}
         style={{fontSize:'15px',cursor:'pointer',display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a href="/contact">CONTACT</a></motion.li>
      </motion.ul>
      
    </motion.nav>
    <hr  /><br /> 
   
    <p id='pa'>Votre agence de developpement web et mobile</p>
    </>
    
  );
 
}

export default Navbar;