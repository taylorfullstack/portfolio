import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css, cx } from '../../styled-system/css';
import { hstack, vstack } from "../../styled-system/patterns";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      className={cx(vstack(
        {
          color: "gray.400",
          bg: "gray.900",
          //py: 10,
          //paddingInline: { base: '10px'!, md: '10px'!, xl: '60px'! },
          //mx: "auto",
          //alignItems: "center",
          //justifyContent: "space-between",
          //p: 4,
          //flexDir: { base: "column", md: "row" },
          //mt: 8
        }), /*"container"*/)}
    >
      <div
        className={cx(vstack(
          {
            color: "gray.400",
            bg: "gray.900",
            //py: 10,
            paddingInline: { base: '10px'!, md: '10px'!, xl: '60px'! },
            mx: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 4,
            flexDir: { base: "column", md: "row" },
            mt: 8
          }), "container")}>
        <a
          href="#"
          className={hstack(
            {
              fontWeight: "medium",
              alignItems: "center",
              justifyContent: { base: "center", md: "flex-start" },
              color: { base: "white", _hover: "violet.400", },
            })}
        >
          <span className={css({ fontSize: "xl" })}
          >TaylorFullstack</span>
        </a>
        <address
          className={hstack({
            gap: 5,
            '& a': {

              color: { base: "white", _hover: "violet.400", },
            },
          })}>
          <a
            href="https://www.linkedin.com/in/heathertaylordev"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" title="LinkedIn" />
          </a>
          <a
            href="https://www.github.com/taylorfullstack"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} size="2x" title="GitHub" />
          </a>
          <a href="mailto:heather.taylor.dev@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" title="Email" />
          </a>
        </address>
      </div>


    </footer>
  );
}