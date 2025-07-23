import './technologie.css';
import {motion} from 'framer-motion';
const Technologie = () => {
return (
 <>
 <div className='technologie'>
 <motion.p 
 whileHover={{scale: 1.4}}
  transition={{ type: 'keyframes', stiffness: 100, duration: 0.5}}
  style={{ fontSize: '30px', cursor: 'pointer', display:'flex', justifyContent:'center',alignItems: 'center'}}
 className='tech'>NOS TECHNOLOGIES</motion.p>
 <div className='hexagone'>
    <img src="/poly.jpeg" alt="fond etoile" className='fond' />
    <div className='overlay'>
   <img className='icone' src="/js.jpeg" alt="logo js" />
   <p className='texte'>JAVASCRIPT</p>
   </div>
 </div>
 <div className='polygone '>
    <img src="/poly.jpeg" alt="fond etoile" className='fond' />
    <div className='overlay'>
   <img className='icone' src="/figma.jpeg" alt="logo js" />
   <p className='texte'>FIGMA</p>
   </div>
   </div>
      <div className='sql'>
    <img src="/poly.jpeg" alt="fond etoile" className='fond' />
    <div className='overlay'>
   <img className='icone' src="/sql.jpeg" alt="logo js" />
   <p className='texte'>SQL</p>
   </div>
 </div>
 <div className='java'>
    <img src="/poly.jpeg" alt="fond etoile" className='fond' />
    <div className='overlay'>
   <img className='icone' src="/java.jpeg" alt="logo js" />
   <p className='texte'>JAVA</p>
   </div>
 </div>
 <div className='react'>
    <img src="/poly.jpeg" alt="fond etoile" className='fond' />
    <div className='overlay'>
   <img className='icone' src="/github.jpeg" alt="logo js" />
   <p className='texte'>REACT</p>
   </div>
 </div>
 </div>
 <div className='h'></div>
                <div className='trai'></div>
 </>
) 
}
export default Technologie;