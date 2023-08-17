

import { css } from '../../styled-system/css'
import { useLanguage } from '../contexts/useLanguage'

const switchStyles = css({
  bg: {
    _hover: "violet.400",
    base: "blue.400"
  },
  display: "inline-flex",
  h: "32px",
  w: 'max-content',
  px: 1,
  fontWeight: "medium",
  fontSize: {
    base: "sm",
    md: "md",

  },
  cursor: "pointer",
  alignItems: "center",
  borderRadius: "0.25rem",
  border: "1px solid transparent",
  position: {
    base: "fixed",
    sm: "static",
  },
  top: {
    base: "var(--size-300)",
    xs: "var(--size-400)",
  },
  right: "var(--size-800)",
})

export default function LanguageToggle() {

  const { language, setLanguage } = useLanguage()
  const otherLanguage = language === "fr" ? "English" : "Français"

  const handleToggle = () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
  };
  //todo add lang attribute to span since it's English or Français
  return (
    <button
      lang={language}
      type="button"
      className={switchStyles}
      aria-description={language === "fr" ? "Voir le site en anglais" : "View the site in French"}
      aria-controls="root"
      onClick={handleToggle} >

      <span>{`${otherLanguage}`}</span>
    </button>
  )
}

/**
 *   const initialLanguage = language === "fr" ? false : true
  //const [enabled, setEnabled] = useState(initialLanguage)
 * const switchSpanStyles = css(
  {
    transform: {
      _groupChecked: "translateX(1rem)",
      base: "translateX(0.25rem)",
    },
    display: "inline-block",
    h: 7,
    w: "fit-content",
    borderRadius: "0.25rem",
    bg: "white",
    fontWeight: "bold",
    transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  })
 */