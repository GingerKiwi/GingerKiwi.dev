import data from '../data';

const ProjectCards = () => {
    return (
      <div className="responsive-two-columns parent-element">
          {data.map((item, index) => (
            <section key={index} className="section--projects section--padding-top">
            <article className="card temp--padding-top-bottom-2rem">
                <img src={`../assets/Project-Screenshots/${item.image}`} alt="{item.alt}" className="card--image" />
                <h3 className="temp--padding-top-bottom-1-25rem text--uppercase">{item.name}</h3>
                <p>{item.about}</p>
                <p className="text--uppercase padding-top-1rem">Stack: {item.stack}</p>
                <p className="text--uppercase">Tools: {item.tools}</p>
<<<<<<< HEAD
                <a href={item.link} className="text--border-bottom-orange" target="_blank" rel="noreferrer">View Site</a><br></br>
                <a href={item.github} className="text--border-bottom-orange" target="_blank" rel="noreferrer">GitHub</a>
                <details><summary>Problem Solved:</summary><p>{item.problem}</p> </details>
=======
                <a href={item.link} className="text--border-bottom-orange padding-top-1rem" target="_blank" rel="noreferrer">View Site</a><br></br>
                <a href={item.github} className="text--border-bottom-orange" target="_blank" rel="noreferrer">GitHub</a>
                <details className='padding-top-1rem'><summary>Problem Solved:</summary><p>{item.problem}</p> </details>
>>>>>>> dev
            </article>
        </section>
          ))}
      </div>
    );
  };

  export default ProjectCards;

// export default function Card(props) {
//     console.log("props.link:", props.link);
//     return (
//         <section className="section--projects">
//             <article className="card temp--padding-top-bottom-2rem">
//                 <img src={`../assets/Project-Screenshots/${props.image}`} alt="{props.alt}" className="card--image" />
//                 <h3 className="temp--padding-top-bottom-2rem text--uppercase">{props.name}</h3>
//                 <p>{props.about}</p>
//                 <p className="text--uppercase">Stack: {props.stack}</p>
//                 <p className="text--uppercase">Tools: {props.tools}</p>
//                 <a href="{props.link}" className="text--border-bottom-orange">View Site</a><br></br>
//                 <a href="{props.github}" className="text--border-bottom-orange">GitHub</a>
//                 {/* <p className="temp--padding-top-bottom-2rem">PROBLEM SOLVED: <br /> {props.problem}</p> */}
//             <details><summary>Problem Solved:</summary><p>{props.problem}</p> </details>
//             </article>
//         </section>
//     )
// }


