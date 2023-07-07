import github from '../assets/Icons-Socials/icon-github.svg'
import linkedin from '../assets/Icons-Socials/icon-linkedin.svg'

const Socials = () => {
    return (
        <section className="section--socials temp--padding-top-bottom-2rem">
            <h2 className="fs--1-5rem">Elizabeth McCready</h2>
            <img src={github} alt="github logo" />
            <img src={linkedin} alt="linkedin logo" />
        </section>
    )
}

export default Socials