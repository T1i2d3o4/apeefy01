

import Navbar from './header/header'
import About from './A_propos/about'
import Histry from './Historique/historique'
import Equip from './equipe/equipe'
import Responsive from './responsive'
import Devis from './devis/devis'
import Footer from './footer/footer'

function App() {
  

  return (
  <>
    <Navbar />

    <About />

    <Histry />
    
    <Equip />

    {/* <Responsive /> */}

    <Devis/>
    
    <Footer/>
  </>   
  )

}

export default App
