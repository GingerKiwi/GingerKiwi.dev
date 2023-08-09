import github from '../assets/Icons-Socials/icon-github.svg'
import linkedin from '../assets/Icons-Socials/icon-linkedin.svg'

const Socials = () => {
    return (
        <aside className="section--socials temp--padding-top-bottom-2rem">
            <h2 className="fs--1-5rem">Elizabeth McCready</h2>
                <div className='div--social-icons'>
                <a href="https://github.com/GingerKiwi"><img src={github} alt="github logo" /></a>
                <a href="https://www.linkedin.com/in/elizabethmccready/"><img src={linkedin} alt="linkedin logo" /></a>
                </div>   
        </aside>
    )
}

export default Socials