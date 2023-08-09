
import avatar from '../assets/avatar.png'

const Hero = () => {
    return (
      <header className='parent-element'>
        <img className="img-hero"  src={avatar} alt="graphic of a redhead woman with a ponytail behind a laptop compute" />
        <div className="header-text">
        <h1>Nice to Meet You! <br></br> I'm Liz McCready</h1>
        <p className="padding-top-1rem text--align-center p-hero">Based in Toronto, Canada, I’m a front-end developer and former adaptive tech specialist passionate about building beauitful accessible web apps and solving puzzles with others.</p>
        <p>I'm also the founder and maintainer of The Alice in Wonderland Open Source Project.</p>
        </div>
      </header>
    );
  };
  
  export default Hero;