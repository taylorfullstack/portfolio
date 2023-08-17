
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css, cx } from '../../styled-system/css';
import { grid, hstack, } from '../../styled-system/patterns';
import heroPhoto from '../assets/profile_photo.jpg'
import { useLanguage } from '../contexts/useLanguage';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons';

//Todo https://www.youtube.com/watch?v=hWGgw1K-i8Y&t=81s
//TODO add wavy gravy, and center my pic because it's weird af

const aboutMe = {
  title: {
    en: "Hi, my name is ",
    fr: "Bonjour, je m'appelle "
  },
  subtitle1: {
    en: "I'm a software developer, ",
    fr: "Je suis développeuse conceptrice logiciel, "
  },
  subtitle2: {
    en: "specialized in JavaScript and React.js.",
    fr: "specialisée en JavaScript et React.js."
  },
  bio: {
    en: "My goal is to continue improving my front end skills as I work toward becoming a fullstack developer.",
    fr: "Mon objectif est de continuer à améliorer mes compétences front end tout en travaillant pour devenir développeuse fullstack.",
  }
}
/**
 * 
 *  bio: {
    en: "My speciality is front end development, but I'm working towards becoming a fullstack developer. I'm currently learning Node.js and MongoDB.",
    fr: "Ma spécialité est le développement front end, mais je travaille pour devenir développeur fullstack. J'apprends actuellement Node.js et MongoDB.",
  }
 */

export default function About() {
  const { language } = useLanguage()
  return (
    <section id="about" className={cx(css({
      paddingInline: { base: '10px'!, md: '26px'!, xl: '60px'! },
      pb: 50,
    }), "wavy-box")}>
      <div className={cx(css({
        display: 'grid',
        gridTemplateColumns: { base: '1fr', md: '2fr 1fr' },
        //justifyContent: 'space-between',
        gap: 5,
        mx: "auto",
        paddingInline: '.5rem',
        py: 10,

      }), "container")}
      >
        {/*TEXT */}
        <div
          className={css({

            textAlign: { base: "center", md: "left" },
            alignItems: "left",
            justifyContent: "left",


          })}
        >
          <h2
            lang={language}
            className={css({
              fontSize: { base: "3xl", md: "4xl" },
              mb: 4, fontWeight: "medium", color: "black"
            })}
          >
            {language === "fr" ? aboutMe.title.fr : aboutMe.title.en}
            <span
              className={css({
                whiteSpace: "nowrap",
              })}> Heather Taylor.</span>
          </h2>
          <h3
            lang={language}
            className={css({
              sm: { fontSize: "2xl" },
              fontSize: "2xl", mb: 4, fontWeight: "medium", color: "black",
            })}
          >
            {language === "fr" ? aboutMe.subtitle1.fr : aboutMe.subtitle1.en}

            {language === "fr" ? aboutMe.subtitle2.fr : aboutMe.subtitle2.en}
          </h3>
          <p
            lang={language}
            className={css({ mb: 8, fontSize: { base: "lg", md: "xl" } })}
          >
            {language === "fr" ? aboutMe.bio.fr : aboutMe.bio.en}
          </p>
        </div>

        {/*PHOTO & Socials */}
        <div>
          <div
            className={grid({ w: "full", placeItems: "center", mb: 2 })}
          >
            <img
              className={css({ objectPosition: "center", rounded: "50%", w: "150px", minWidth: "150px" })}
              alt="Heather Taylor"
              src={heroPhoto}
            />
          </div>
          <address
            className={css({
              display: 'flex',
              flexDir: 'column',
              alignItems: 'center',
              padding: 0,
              gap: 2,
              '& a': {
                color: { base: "black", _hover: "violet.800", },
              },
            })}>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'center',
                gap: "2rem",
                alignItems: 'center',
                alignContent: 'center',
                //textAlign: 'left',
                flexDir: 'row',
                padding: 0,
              },
              )}>
              <a href="mailto:heather.taylor.dev@gmail.com">
                <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" title='Email' />
              </a>
              <a
                href="https://www.github.com/taylorfullstack"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="3x" title='GitHub' />
              </a>
              <a
                href="https://www.linkedin.com/in/heathertaylordev"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" title='LinkedIn' />
              </a>
            </div>

            <a
              href="https://goo.gl/maps/FRmo8pahi5KWqHzy6"
              target="_blank"
              className={hstack({

                '& p': {
                  fontSize: { base: "xl", },
                },
              })}>
              <FontAwesomeIcon icon={faLocationDot} size="xl" title="location" />
              <p> 34000, Montpellier</p>
            </a>
          </address>
        </div>




      </div>
    </section >
  );
}

/*
linkedin logo color
className={css({
                      color: {
                        base: "#0072b1",
                        _hover: "violet.800"
                      }
                    })}*/