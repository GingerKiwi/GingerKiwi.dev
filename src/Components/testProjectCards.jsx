export default function Projects(props) {
    return (
        <div>
            {props.name && <h3>{props.name}</h3>}
            <p>About: {props.about}</p>
            <hr />
        </div>
    )
}