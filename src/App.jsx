import './css-reset.css'
import './App.css'
// import Hero from './Components/Hero'
// import StackAndTools from './Components/StackAndTools'
// import ProjectCards from './Components/ProjectCards'
// import ProjectCardsHardCoded from './Components/ProjectCards-HardCoded'
// import Socials from './Components/Socials'
// import ContactForm from './Components/ContactForm'
// import BuildingInPublic from './Components/BuildingInPublic'
import dataTesting from './dataTesting'
import Projects from './Components/testProjectCards'

function App() {
  const projectElements = dataTesting.map(project => {
      return <Projects name={project.name} about={project.about} />
  })
  return (
      <div>
          {projectElements}
      </div>
  )
}

// function App() {

//   return (
//     <>
//       <div className="container">
//         <BuildingInPublic/>
//         <Socials/>
//         <Hero/>
//         <StackAndTools/>
//         <ProjectCardsHardCoded/>
//         <ContactForm/>
//         <Socials/>
//       </div>
//     </>
//   )
// }

export default App