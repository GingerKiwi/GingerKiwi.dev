import alice from '../assets/Alice-Screenshot.png?url'
import yarnhelpimg from '../assets/HowMuchYarn3.png?url'
import gkblog from '../assets/GK-Blog-Screenshot.png?url'
import gkdev from '../assets/GKDev.jpg?url'
// The file below broke the build!
// import gkdev from '../assets/GK-Dev-Screenshot-Figma.png?url'
import crl from '../assets/CRL-Screenshot.png?url'

const ProjectCardsHardCoded = () => {
    return (
        <section className="section--projects section--padding-top">
        <h2>Projects</h2>
        <h3 className='text--pink'>Note: These are temporaily hardcoded. Rendering via looping though projectCardsData.js is in developement. Project descriptions will be either in a model or an accordian</h3>
            <article className="padding-top-1rem">
            <img src={yarnhelpimg} alt="screenshot ADD ALT IN DATA.JS FILE!!" />
                <h3>Yarn Help!</h3>
                    
                    <p>Multi-page site with to help knitters & crocheters with math. Main page is “How Much Yarn” that calculates how many balls of X yarn with Y yards/ball are needed to make Z project (eg adult small sweater).</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Stack:</h3>
                    <p className="text--uppercase">html, css, javascript, markdown, Ravely.com API</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Tools:</h3>
                    <p className="text--uppercase">vs code, obsidian, notion, git, github, netlify</p>
                    <p><a href="https://yarnhelp.app/">Project link</a> </p>
                    <p><a href="https://github.com/GingerKiwi/yarnhelp">GitHub</a></p>
                    <p><a href="https://yarnhelp3.netlify.app/">Version 3.0 Project link</a> </p>
                    <p><a href="https://github.com/GingerKiwi/yarnhelp3">Version 3.0 GitHub</a></p>
            </article>
            <article className="padding-top-1rem">
            <img src={alice} alt="screenshot ADD ALT IN DATA.JS FILE!!" />
                <h3>The Alice in Wonderland Project <br />Open Source Project Creator and Maintiner</h3>
                    
                    <p> An experiential, project based learning open source software project and curriculum to help new developers learn GitHub workflows and Open Source in a supportive, social environment. The app we build is a text-based vanilla JavaScript game inspired by Tim Burton's Alice in Wonderland movie. Version 2.0 will be ready for new participants for Hacktoberfest in October, 2023. Founded during Hacktoberfest 2022, and now in redevelopment. </p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Stack:</h3>
                    <p className="text--uppercase">html, css, javascript, markdown, react, styled components,</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Tools:</h3>
                    <p className="text--uppercase">figma, vs code, obsidian, notion, git, github, vercel, github pages, github actions, github projects, discord</p>
                    <p><a href="https://aliceproject.vercel.app/">Project Link</a> </p>
                    <p><a href="https://github.com/The-Alice-In-Wonderland-Project">GitHub</a></p>
            </article>
            <article className="padding-top-1rem">
                
                <img src={gkblog} alt="screenshot ADD ALT IN DATA.JS FILE!!" />
                <h3>Ginger Kiwi Blog</h3>
                    <p>JAMStack blog dev on Netlify using 11ty, Numjucks, and Markdown and YAML in Obsidian</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Stack:</h3>
                    <p className="text--uppercase">html, css, markdown, 11ty, numjucks, prism.js</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Tools:</h3>
                    <p className="text--uppercase">vs code, obsidian, notion, git, github, netlify</p>
                    <p><a href="https://gingerkiwi.blog/">Project link</a> </p>
                    <p><a href="https://github.com/GingerKiwi/gingerkiwi-blog-2023">GitHub</a></p>
            </article>
            <article className="padding-top-1rem">
                    <img src={crl} alt="screenshot ADD ALT IN DATA.JS FILE!!" />
                <h3>Conquring Responsive Layouts</h3>
                    
                    <p>My work from Kevin Powell's Conquering Responsive Layouts 21 Day Challenge deployed as a multipage site using Prism.js to display code blocks. </p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Stack:</h3>
                    <p className='text--uppercase'> html, css, prism.js</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Tools:</h3>
                    <p className="text--uppercase">vs code, obsidian, notion, git, github, netlify</p>
                    <p><a href="https://responsive-layouts-21-day-challenge.netlify.app/">Project link</a> </p>
                    <p><a href="https://github.com/GingerKiwi/conquering-responsive-layouts">GitHub</a></p>
            </article>
            <article className="padding-top-1rem">
            
                    <img src={gkdev} alt="screenshot ADD ALT IN DATA.JS FILE!!" />
                <h3>GingerKiwi.dev | Portfolio Site</h3>
                    
                    <p>Project description</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Stack:</h3>
                    <p className="text--uppercase">html, css, javascript, markdown, react</p>
                    <h3 className='text--uppercase text--border-bottom-orange'>Tools:</h3>
                    <p className="text--uppercase">vs code, notion, git, github, vercel</p>
                    <p><a href="https://main--gingerkiwi-dev-2023-06.netlify.app/">Project link</a> </p>
                    <p><a href="https://github.com/GingerKiwi/GingerKiwi.dev">GitHub</a></p>
            </article>
        </section>
    )
}

export default ProjectCardsHardCoded

// Project Card Template:
// <article>
// <h3>Project name</h3>
//     <img src="" alt="" />
//     <p>Project description</p>
//     <p>Project stack</p>
//     <p>Project tools</p>
//     <p>Project link</p>
//     <p>GitHub</p>
// </article>