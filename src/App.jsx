import './css-reset.css'
import './App.css'
import Hero from './Components/Hero'
import StackAndTools from './Components/StackAndTools'
import Socials from './Components/Socials'
import ProjectCards from './Components/ProjectCards'
import BuildingInPublic from './Components/BuildingInPublic'

function App() {
  return (
      <div className="app-container">
        
        <Socials/>
        {/* <BuildingInPublic/> */}
        <Hero/>
        <StackAndTools/>
        <h2 className='h2--border-bottom-orange margin--bottom-1rem'>Projects</h2>
        <ProjectCards />
        {/* <ItemListComponent /> */}
        {/* <ContactForm/> */}
        <Socials/>
      </div>
  )
}

export default App