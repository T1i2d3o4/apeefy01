import './equipe.css';
import { motion, scale } from 'framer-motion';


function Equip () {
  const teamMembers = [
    {
      gitHub: <><a href= "https://github.com/RichelProgramming" className="link"> <img src="/gh.jpg" alt="logo" className='log'/> </a> <a href="mailto:richeltsobeng@gmail.com " className="link"> <img src="/mail.jpg"  alt="logo" className='log' /></a></>,
      name: "Richel TSOBENG",
      image: "/RICH.png",
      description: "Le développement web étant ma passion , je mets tout mon possible pour toujours produire un travail de qualité ceci en creant des disigns unique   ."
    },
    
    {
      gitHub: <><a href= "https://github.com/T1i2d3o4" className="link"> <img src="/gh.jpg" alt="logo" className='log'/> </a> <a href="mailto:fraisnelletayo@gmail.com" className="link">  <img src="/mail.jpg" alt="logo" className='log' /></a></>,
      name: "Fraisnelle TAYO",
      image: "/FRAISN.png",
      description: "Guidée, passionnée ma curiosité dans le domaine du numérique, chaque ligne de commande m'emmène loin, d'où ma mission en tant que developpeur web."
    },
    {
      gitHub: <><a href= "https://github.com/stehie005" className="link"> <img src="/gh.jpg" alt="logo" className='log'/> </a> <a href="mailto:stephienguena5@gmail.com" className="link"> <img src="/mail.jpg" alt="logo" className='log' /></a></>,
      name: "Stephie NGUENA",
      image: "/STEPH.png",
      description: "Développeuse en genie logiciel, je mets mes competences au service de systèmes robustes évolutifs et centrés sur l’utilisateur."
    },
  ];
  return (
    <motion.div className='member'>
      <motion.h1 
      whileHover={{scale: 1.4,  }} 
      transition={{type: 'keyframes', stiffness:100, duration: 0.5}}
      style={{fontSize:'30px',cursor:'pointer',display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    
      > <hr id="horizontal_line"/> <br /> NOTRE EQUIPE <hr  id="horizontal_line"/><br /> </motion.h1>
      <motion.div className="team-container">
        {teamMembers.map((member, index) => (
          <motion.div className="team-member" key={index}>
            <p id='member'>{member.name}</p>
            <motion.img initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             whileHover={{ x: 40 ,y: 40,z: 40 }}
             transition={{ duration: 1 }}className="photo" src={member.image} alt={member.name} 
            />
            <motion.div 
             className="person"
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             whileHover={{ x: 40 ,y: 40,z: 40 }}
             transition={{ duration: 1 }}
           >
            
            
              <p>{member.description} <br /> {member.gitHub}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
    
    
    
    
     
     
    
      
      
  
}
export default Equip;