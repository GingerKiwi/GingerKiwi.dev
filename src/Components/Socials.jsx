import github from '../assets/Icons-Socials/icon-github.svg'
import email from '../assets/Icons-Socials/icon-envelope-white.png'
import linkedin from '../assets/Icons-Socials/icon-linkedin.svg'

const Socials = () => {
    return (
        <aside className="section--socials temp--padding-top-bottom-2rem">
            <h2 className="fs--1-5rem text--pink">Elizabeth (Liz) M<sup>c</sup>Cready</h2>
                <div className='div--social-icons padding-top-1rem'>
                <a href="https://github.com/GingerKiwi" className='link--socials'><img src={github} alt="github logo" /></a>
                <a href="mailto:liz@gingerkiwi.dev" className='link--socials'><img src={email} alt="email icon" /></a>
                <a href="https://www.linkedin.com/in/elizabethmccready/" className='link--socials'><img src={linkedin} alt="linkedin logo" /></a>
                </div>   
        </aside>
    )
}

export default Socials