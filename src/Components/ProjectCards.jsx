// const ProjectCards = () => {
//     return (
//         <section className="section--projects">
//         <h2>Project cards - from mapping over projectData.js object</h2>
//         </section>
//     )
// }

export default function Card(props) {
    return (
        <section className="section--projects">
            {/* <img src={`../images/${props.img}`} className="card--image" /> */}
            <h3>{props.name}</h3>
            <p>{props.about}</p>
            {/* <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p> */}
        </section>
    )
}

// export default ProjectCard