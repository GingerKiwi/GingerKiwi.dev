export default function Card(props) {
    return (
        <section className="section--projects">
            <article className="card">
            <img src={`../assets/${props.image}`} alt="{props.alt}" className="card--image" />
            <h3>{props.name}</h3>
            <p>{props.about}</p>
            <p className="text--uppercase">Stack: {props.stack}</p>
            <p className="text--uppercase">Tools: {props.tools}</p>
            <a href="{props.link}" className="text--border-bottom-orange">View Site</a><br></br>
            <a href="{props.github}" className="text--border-bottom-orange">GitHub</a>
            <p>PROBLEM SOLVED: <br /> {props.problem}</p>
        </article>
        </section>
    )
}