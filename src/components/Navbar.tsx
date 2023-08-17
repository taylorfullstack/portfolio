

import { css, cx } from "../../styled-system/css";
//import { flex } from "../../styled-system/patterns";
import { ReactNode, useState, useRef } from 'react'
import { useLanguage } from "../contexts/useLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";



export default function Navbar({ children }: { children: ReactNode }) {
  const { language } = useLanguage()

  const primaryHeaderRef = useRef<HTMLElement | null>(null);
  const navToggleRef = useRef<HTMLButtonElement | null>(null);
  const primaryNavRef = useRef<HTMLElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsNavVisible(!isNavVisible);
    if (navToggleRef.current) {
      navToggleRef.current.setAttribute('aria-expanded', !isNavVisible ? 'true' : 'false');
    }
    if (primaryNavRef.current) {
      primaryNavRef.current.toggleAttribute('data-visible');
    }
    if (primaryHeaderRef.current) {
      primaryHeaderRef.current.toggleAttribute('data-overlay');
    }
  };


  return (
    <header
      lang={language}
      ref={primaryHeaderRef}
      className={cx(
        css({
          bg: "gray.900",
          //p: 0,
          pb: 3,
          position: "sticky",
          top: 0,
          zIndex: 10,
          paddingInline: { base: '5px'!, md: '10px'!, xl: '60px'! },




        }),
        /*flex({
          mx: "auto",
          p: 5,
          flexDir: { base: "column", md: "row" },
          alignItems: { base: "left", md: "center" },
          justifyContent: { base: "left", md: "center" },
        }), */
        "primary-header"
      )}
    >
      <div className="container"
      >
        <div className="nav-wrapper">
          <a
            href="#"
            className={css({
              fontWeight: "medium",
              fontSize: { base: "xl", xs: "2xl", md: "3xl" },
              color: "white",
              textAlign: "center",
              //mb: { base: 4, md: 0 },
              //ml: 3,
              //mr: { base: 0, md: "auto", },
            })}
          >
            <h1>TaylorFullstack</h1>
          </a>

          <div
            className={
              css({
                display: "flex",
                alignItems: "center",
              })
            }>
            <button
              type="button"
              onClick={handleMenuToggle}
              ref={navToggleRef}
              //className="mobile-nav-toggle"
              className={css({



                display: { base: "block", sm: "none" },

                position: {
                  base: "fixed",
                  sm: "static",
                },
                top: {
                  base: "var(--size-100)",
                  xs: "var(--size-200)",
                },

                right: "var(--size-300)",
                cursor: "pointer",
                background: "transparent",
                border: 0,
                padding: "0.5em",

              })}
              aria-controls="primary-navigation"
              aria-expanded="false">
              <FontAwesomeIcon
                icon={isNavVisible ? faXmark : faBars}
                size="2xl"
                fixedWidth
                aria-hidden="true"
                className={
                  css({
                    color: "white",
                  })
                } />
              <span className="sr-only">Menu</span>
            </button>
            <nav
              id="primary-navigation"
              ref={primaryNavRef}
              lang={language}
              /**was primary-navigation class */
              className={cx(css({
                '& a': {
                  mr: { base: 0, md: 5 },
                },
                fontSize: "xl",
                mx: { base: "auto", md: 0 },
                py: 1,
                pl: 4,
                ml: "auto",
                flexDir: { base: "column", md: "row" },
                alignItems: { base: "flex-start", md: "center" },
                justifyContent: "center",
                display: "none",
                '&[data-visible]': {
                  display: "block",
                  position: "fixed",
                  padding: "var(--size-200)",
                  inset: "3.875rem var(--size-200) auto",
                  maxWidth: "25rem",
                  marginLeft: "auto",
                  background: "gray.900",
                  borderRadius: "var(--size-100)",
                  boxShadow: "0 0 0.75em rgb(0, 0, 0, 0.05)",
                },
                sm: {
                  display: "flex",
                  py: 1, pl: 4, ml: "auto",
                  flexDir: { base: "column", md: "row" },
                  alignItems: { base: "flex-start", md: "center" },
                  justifyContent: "center",
                }

              }),)}
            >
              <ul className={
                css({
                  fontSize: {
                    base: "sm",
                    md: "md",
                  },
                  display: { base: "grid", sm: "flex" },
                  gap: "var(--size-400)",
                  fontWeight: "var(--fw-semi-bold)",
                  textAlign: {
                    base: "center",
                    sm: "left",
                  },

                })
              }>
                <li>
                  <a href="#projects">
                    {language === "fr" ? "Projets" : "Projects"}
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    {language === "fr" ? "Compétences" : "Skills"}
                  </a>
                </li>
                <li>

                  <a
                    href={language === "fr" ? "https://cvdesignr.com/p/64b929050e4fa" : "https://cvdesignr.com/p/64cccb939e051"}
                    target="_blank"
                    hrefLang={language === "fr" ? "fr" : "en"}>
                    <span>{language === "fr" ? "Mon CV " : "My Resume "}</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </li>

              </ul>



            </nav>

            <div
              className={css({
                mx: { base: "auto" },
                paddingLeft: { base: 5, md: 0 },
                //mt: { base: 5, md: 0 }
              })}
            >
              {children}
            </div>
          </div>



        </div>
      </div>
    </header >
  );
} 