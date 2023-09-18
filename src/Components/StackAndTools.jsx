// import oval from '../assets/Oval-pink.svg'

const StackAndTools = () => {
    return (
        <section className="section--stack-and-tools section--padding-top parent-element">
            {/* <img  src={oval} alt="pink half circle graphic" /> */}
            <div className="container container--stack-and-tools">
                {/* <div  style={{ backgroundImage:`url(${oval})`,backgroundRepeat:"no-repeat"}}></div> */}
            
            <h2 className="h2--border-bottom-orange padding-top-1rem">My Stack</h2>
            <p className="text--align-center text--uppercase">html, css, javascript, react, markdown, 11ty, Charka UI<br></br> Refreshing & Updating: C#.NET 7.0, SQL</p>

            <h2 className="h2--border-bottom-orange padding-top-1rem">My Tools</h2>
            <p className="text--align-center text--uppercase">vs code, obsidian, notion, git, github, figma, jest.js<br></br>postman, netlify, vercel, slack, discord</p>

            <h2 className="h2--border-bottom-orange padding-top-1rem">Exploring</h2>
            <p className="text--align-center text--uppercase">ibm cobol for vscode <br></br>typescript, firebase, Material UI<br></br>azure data studio, Docker,<br></br>tailwind css, jira, </p>

            {/* <h2 className="h2--border-bottom-orange padding-top-1rem">Updating and Refreshing</h2>
            <p className="text--align-center text--uppercase">C#.NET 7.0, SQL </p> */}

            <h2 className="h2--border-bottom-orange padding-top-1rem">2019-2021 Coursework</h2>
            <p className="text--align-center text--uppercase">c#.net, visual studio, tdd, oracle sql, <br></br>python, php, javascript, html, css, uml, <br></br>qgis, arcgis, asana, ms teams, <br></br>adobe xd, adobe photoshop, moodle (sys admin)</p>
            </div>
        </section>
    )
}

export default StackAndTools