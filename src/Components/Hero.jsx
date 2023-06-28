
import avatar from '../assets/avatar.png'

const Hero = () => {
    return (
      <header>
        <img src={avatar} alt="graphic of a redhead woman with a ponytail behind a laptop compute" />
        <h1>Nice to Meet You. <br></br> I'm Liz McCready</h1>
        <p className="padding-top-1rem text--align-center">Based in Toronto, Canada, I’m a front-end developer passionate about building accessible web apps and solving puzzles with others.</p>
      </header>
    );
  };
  
  export default Hero;