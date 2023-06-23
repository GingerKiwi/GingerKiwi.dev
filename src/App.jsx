import './css-reset.css'
import './App.css'
import Hero from './Components/Hero'
import StackAndTools from './Components/StackAndTools'
import ProjectCards from './Components/ProjectCards'

function App() {

  return (
    <>
      <div className="container">
        <Hero/>
        <StackAndTools/>
        <ProjectCards/>
      </div>
    </>
  )
}

export default App