import { css, cx, } from '../../styled-system/css';
import { flex, vstack, } from '../../styled-system/patterns';
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from '../contexts/useLanguage';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

/*const projectImgAnchorStyles = css({
  display: "block",
  borderStyle: "solid",
  borderRadius: "0.375rem",
  borderWidth: "0px",
  outlineStyle: "solid",
  outlineWidth: "4px",
  outlineOffset: { base: '0px', _hover: "-2px" },
  outlineColor: {
    base: "transparent",
    _hover: "gray.800",
    _focus: "gray.800",
  },
  shadow: "md",
  maxWidth: "600px",
  w: 'full'
})*/

//TODO fix the card layout messing up in the French version when the project description is too long

const projectImgStyles = css({
  boxShadow: "0 2px 3px -1px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  objectPosition: "center",
  objectFit: "cover",
  w: "full",
  borderStyle: "solid",
  borderRadius: "0.25rem 0.25rem 0rem 0rem",
  borderWidth: '0px',
  borderColor: 'transparent',
})

const projectCardStyles = css({
  display: 'flex',
  flexDir: 'column',

  //gap: '2',
  w: { base: 'full', },
  //maxWidth: { base: '500px', },
  justifyItems: "left",
  placeSelf: "center",
  height: 'full',
  borderRadius: '0.25rem',
  borderWidth: '0px',
  borderColor: 'transparent',
  boxShadow: "8px 0px 10px 8px rgba(0,0,0,0.1)",
})


export default function Projects() {

  const { language } = useLanguage()

  return (
    <section id="projects"
      className={css({
        px: { base: 5, md: 10, xl: 40 },
        paddingInline: { base: '5px'!, md: '10px'!, xl: '60px'! },
        mx: "auto",
        textAlign: "center",
        bg: "white"
      })}
    >

      <div className={vstack({ flexDir: "column", w: "full", mb: 5 })}
      >
        <CodeBracketIcon
          className={css({ mx: "auto", w: 10, mb: 2 })}
        />
        <h2
          lang={language}
          className={css({ sm: { fontSize: "4xl" }, fontSize: "3xl", fontWeight: "medium", mb: 4, color: "black", })}
        >
          {language === "fr" ? "Projets" : "Projects"}
        </h2>
      </div>

      {/**Project Wrapper*/}
      <div
        className={cx(css({
          display: 'grid',
          gridAutoFlow: 'row',
          gap: "2em",
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 450px))',
          /*{
            base: 'repeat(auto-fit, minmax(250px, 1fr))',
            xs: 'repeat(auto-fit, minmax(300px, 1fr))',
            //sm: 'repeat(auto-fill, minmax(400px, 1fr))',
            //md: 'repeat(auto-fit, minmax(300px, 1fr))',
            lg: 'repeat(auto-fill, minmax(400px, 1fr))',
          },*/
          placeContent: 'center',
          mb: 10,
        }), "container")}
      >
        {/**PROJECTS */}
        {projects.map((project) => (

          <div
            key={project.id}
            className={projectCardStyles}
          >
            {/**PROJECT Image */}
            <img
              alt={project.title}
              className={projectImgStyles}
              src={project.image}
            />
            {/**PROJECT Description Section */}
            <div
              className={css({
                w: 'full',
              })}>

              {/**PROJECT title and links */}
              <div
                className={flex({
                  justifyItems: "left",
                  p: 2,
                  w: 'full',
                })}>

                <h3
                  lang={language}
                  className={css({
                    fontSize: "2xl",
                    fontWeight: "medium",
                    color: "black",
                  })}
                >
                  {project.title}
                </h3>

                <div
                  className={css({
                    marginLeft: 'auto',
                    display: 'flex',
                    gap: 3,
                    '& a': {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
                  })}
                >

                  {/**Link to site, if live demo is available */
                    project.links.site &&
                    <a href={project.links.site} target="_blank">

                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" color='black' />
                      <span className='sr-only'> Site</span>
                    </a>
                  }

                  <a href={project.links.github} target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2xl" color='black' />
                    <span className='sr-only'> Code</span>
                  </a>

                </div>
              </div>

              {/**PROJECT description and tags */}
              <h4
                lang={language}
                className={css({
                  color: "gray.800",
                  px: 2,
                  fontSize: "lg",
                  textAlign: "left",
                })
                }>{language === "fr" ? project.description.fr : project.description.en}
              </h4>

              <ul
                aria-label="Technologies"
                className={css({
                  display: 'flex',
                  flexWrap: "wrap",
                  gap: 1,
                  p: 2,
                  alignItems: "end",
                  minHeight: '65px',
                  mt: 'auto',
                })}
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className={css({
                      rounded: "1rem",
                      borderWidth: 1,
                      borderColor: "gray.700",
                      paddingInline: ".375rem",
                      //height: '20px',
                      fontSize: "sm",
                      flexGrow: 0,
                    })}
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section >
  );
}