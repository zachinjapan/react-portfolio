import "./Projects.css";
import quote from "../../images/projects/quote.webp";
import blog from "../../images/projects/blog.webp";
import prefecture from "../../images/projects/prefecture.webp";
import anime from "../../images/projects/anime.webp";
import haku from "../../images/projects/haku.webp";
import MUIProjectCard from "../UI/ProjectCard/MUIProjectCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import RunningImg from "../UI/RunningImg";
import niceRiff from "../../images/projects/niceRiff.jpeg";
import Naruto from "../../images/UI/narutoRun.gif";
const Projects = (props) => {
  let content = {
    English: {
      mainTitle: "Featured Projects",

      projects: [
        {
          title: "My Anime Collection",
          description: "Find and keep track of your favorite anime.",
          image: anime,
          link: "https://www.my-anime-collection.com/landing",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/my-anime-collection",
          tech: "Tech",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
          youtube: "https://youtu.be/L_BcbOyHGzs",
          english: true,
          japanese: true,
        },
        {
          title: "Wow On-Ga-Ku",
          description:
            "A place to share your new songs, covers, and musical ideas with the world",
          image: niceRiff,
          link: "https://wowongaku.netlify.app/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/vue-music-app",
          tech: "Tech",
          tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
          english: true,
          japanese: true,
        },
        {
          title: "Zach In Japan",
          description:
            "Read about coding concepts, Japan, and all things related to being a web developer.",
          image: blog,
          link: "https://zachinjapan.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "Tech",
          tags: [
            "React",
            "CSS",
            "Markdown",
            "Gatsby",
            "GraphQL",
            "Gatsby Cloud",
          ],
          youtube: "https://youtu.be/I96IPEaj4qA",
          english: true,
          japanese: false,
        },
        {
          title: `HAKU`,
          description: "Track and compare jobs during the interview process.",
          image: haku,
          link: "https://hakujobs.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/haku",
          tech: "Tech",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
          youtube: "https://www.youtube.com/watch?v=q1rVbqMw0ug",
          english: true,
          japanese: false,
        },
        {
          title: "Quote Quiz",
          description:
            "Quiz your knowledge of famous quotes and share your favorite quotes on twitter.",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/quotes",
          tech: "Tech",
          tags: ["CSS", "React", "API", "Netlify", "TypeScript", "Netlify"],
          english: true,
          japanese: false,
        },

        {
          title: "Prefecture Match",
          description:
            "Learn the Japanese prefectures using this fun matching game",
          image: prefecture,
          link: "https://prefecture-match.herokuapp.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/prefecture-match",
          tech: "Tech",
          tags: ["React", "CSS", "JavaScript", "Heroku"],
          english: false,
          japanese: true,
        },
      ],
    },
    Japanese: {
      mainTitle: "??????????????????",
      projects: [
        {
          title: "???????????????????????????????????????",
          description: "??????????????????????????????????????????????????????????????????????????????",
          image: anime,
          link: "https://www.my-anime-collection.com/landing",
          linkText: "??????????????????",
          github: "https://github.com/zachinjapan/my-anime-collection",
          tech: "??????",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
          youtube: "https://youtu.be/L_BcbOyHGzs",
          english: true,
          japanese: true,
        },
        {
          title: "???????????????",
          description:
            "?????????????????????????????????????????????????????????????????????????????????????????????",
          image: niceRiff,
          link: "https://wowongaku.netlify.app/",
          linkText: "??????????????????",
          github: "https://github.com/zachinjapan/vue-music-app",
          tech: "??????",
          tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
          english: true,
          japanese: true,
        },
        {
          title: "?????????????????????????????????",
          description: "??????????????????????????????????????????",
          image: blog,
          link: "https://zachinjapan.gatsbyjs.io",
          linkText: "??????????????????",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "??????",
          tags: [
            "React",
            "CSS",
            "Markdown",
            "Gatsby",
            "GraphQL",
            "Gatsby Cloud",
          ],
          youtube: "https://youtu.be/I96IPEaj4qA",
          english: true,
          japanese: false,
        },
        {
          title: `HAKU ????????????`,
          description:
            "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
          image: haku,
          link: "https://hakujobs.com",
          linkText: "??????????????????",
          github: "github.com/zachinjapan/haku",
          tech: "??????",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
          youtube: "https://www.youtube.com/watch?v=q1rVbqMw0ug",
          english: true,
          japanese: false,
        },

        {
          title: "???????????????",
          description: "?????????????????????????????????????????????????????????????????????",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "??????????????????",
          github: "https://github.com/zachinjapan/quotes",
          tech: "??????",
          tags: ["CSS", "React", "API", "Typescript", "Netlify"],
          english: true,
          japanese: false,
        },
        {
          title: "???????????????????????????",
          description:
            "????????????????????????????????????????????????????????????????????????????????????",
          image: prefecture,
          link: "https://prefecture-match.herokuapp.com",
          linkText: "??????????????????",
          github: "https://github.com/zachinjapan/prefecture-match",
          tech: "??????",
          tags: ["React", "CSS", "JavaScript", "Heroku"],
          english: false,
          japanese: true,
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <>
      <div className="Projects" id="Projects">
        <h1>{content.mainTitle}</h1>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          animateOnce={true}
        >
          <RunningImg src={Naruto} />
        </AnimationOnScroll>

        <div className="projects-container">
          {content.projects.map((project, index) => (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              animateOnce={true}
            >
              <MUIProjectCard
                cardWidth="405px"
                index={index + 1}
                title={project.title}
                description={project.description}
                tech_description={project.tech_description}
                image={project.image}
                link={project.link}
                linkText={project.linkText}
                github={project.github}
                tags={project.tags}
                tech={project.tech}
                callToAction={project.callToAction}
                youtube={project.youtube}
                english={project.english}
                japanese={project.japanese}
              />
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
