export default function Card(props) {
    return (
        <section className="section--projects">
            <article className="card temp--padding-top-bottom-2rem">
            <img src={`../assets/Project-Screenshots/${props.image}`} alt="{props.alt}" className="card--image" />
            <h3 className="temp--padding-top-bottom-2rem text--uppercase">{props.name}</h3>
            <p>{props.about}</p>
            <p className="text--uppercase">Stack: {props.stack}</p>
            <p className="text--uppercase">Tools: {props.tools}</p>
            <a href="{props.link}" className="text--border-bottom-orange">View Site</a><br></br>
            <a href="{props.github}" className="text--border-bottom-orange">GitHub</a>
            <p className="temp--padding-top-bottom-2rem">PROBLEM SOLVED: <br /> {props.problem}</p>
        </article>
        </section>
    )
}