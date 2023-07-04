import './css-reset.css'
import './App.css'
import Hero from './Components/Hero'
import StackAndTools from './Components/StackAndTools'
// import ProjectCards from './Components/ProjectCards'
// import ProjectCardsHardCoded from './Components/ProjectCards-HardCoded'
import Socials from './Components/Socials'
import ContactForm from './Components/ContactForm'
import BuildingInPublic from './Components/BuildingInPublic'
import data from './data.js'
// import Projects from './Components/testProjectCards'
import Card from './Components/ProjectCards'


function App() {

  const cards = data.map(item => {
    return (
        <Card
            image={item.image}
            name={item.name}
            about={item.about}
            stack={item.stack}
            tools={item.tools}
            link={item.link}
            github={item.github}
            alt={item.alt}
            problem={item.problem}
            
        />
    )
})  

  return (
    <>
      <div className="container">
        <BuildingInPublic/>
        <Socials/>
        <Hero/>
        <StackAndTools/>
        <div>{cards}</div>
        <ContactForm/>
        <Socials/>
      </div>
    </>
  )
}

export default App