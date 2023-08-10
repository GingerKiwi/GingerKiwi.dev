import data from '../data';

const ProjectCards = () => {
    return (
      <section className="responsive-two-columns parent-element">
          {data.map((item, index) => (
            <div key={index} className="section--projects section--padding-top">
            <article className="card temp--padding-top-bottom-2rem">
                <img src={`../assets/Project-Screenshots/${item.image}`} alt="{item.alt}" className="card--image" />
                <h3 className="temp--padding-top-bottom-1-25rem text--uppercase">{item.name}</h3>
                <p>{item.about}</p>
                <p className="text--uppercase padding-top-1rem">Stack: {item.stack}</p>
                <p className="text--uppercase">Tools: {item.tools}</p>
                <a href={item.link} className="text--border-bottom-orange padding-top-1rem" target="_blank" rel="noreferrer">View Site</a><br></br>
                <a href={item.github} className="text--border-bottom-orange" target="_blank" rel="noreferrer">GitHub</a>
                <details className='padding-top-1rem'><summary>Problem Solved:</summary><p>{item.problem}</p> </details>
            </article>
        </div>
          ))}
      </section>
    );
  };

  export default ProjectCards;


