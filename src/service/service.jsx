import './service.css';
import {motion} from "framer-motion";
const Service = () => {
return (
 <>
    <motion.div
    initial={{ opacity: 0, y: 30}}
    animate={{ opacity: 1, y:0}}
    transition={{duration: 0.8, delay: 0.3}}
    >

    <nav className='service'>
        <div class='fuse'>
        </div>
         <h3
            className='apparition'id='te'>NOS SERVICES</h3>
             <div class='web'>
             
            <img className='web' src="/web.png" alt="web" />
              </div>
        <p className='site'>développement des sites web et des applicatons</p> 
        <h5 className='phrase'>nous concevons des sites web et des applications performants, 
            securisés et évolutifs, pour repondre aux exigences
            de vos utilisateurs et aux standards du numérique. </h5>
            <div className='mobile'>
            <img className='mobile' src="/mobile.png" alt="mobile" />
            </div>
        <p className='projet'>développement des applicatons mobiles</p> 
        <h5 className='mot'>nous développons des applications mobiles 
            securisées, performantes et évolutifs, compatible ios et android,
            intée aux meilleurs pratiques du mobile-first. </h5>
                <div className='trait-verti'></div>
                <div className='trait-vert'></div>
                <div className='trait-hor'></div>
                <div className='trait-ho'></div>
                <div className='trait-hort'></div>
                <div className='trait-h'></div>
                <div className='trait'></div>
    </nav>
    </motion.div>
 </>
)
}
export default Service;