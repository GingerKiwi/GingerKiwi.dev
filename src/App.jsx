import './css-reset.css'
import './App.css'
import Hero from './Components/Hero'
import StackAndTools from './Components/StackAndTools'
// import ProjectCards from './Components/ProjectCards'
import ProjectCardsHardCoded from './Components/ProjectCards-HardCoded'
import Socials from './Components/Socials'
import ContactForm from './Components/ContactForm'

function App() {

  return (
    <>
      <div className="container">
        <Socials/>
        <Hero/>
        <StackAndTools/>
        <ProjectCardsHardCoded/>
        <ContactForm/>
        <Socials/>
      </div>
    </>
  )
}

export default App