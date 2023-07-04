export default function Projects(props) {
    return (
        <div>
            {props.name && <h3>Setup: {props.about}</h3>}
            <p>Project: {props.about}</p>
            <hr />
        </div>
    )
}