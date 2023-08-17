import { CpuChipIcon } from "@heroicons/react/24/solid";
import { skills } from "../data";
import { css } from "../../styled-system/css";
import { hstack } from "../../styled-system/patterns";
import { useLanguage } from "../contexts/useLanguage";

export default function Skills() {
  const { language } = useLanguage()
  return (
    <section id="skills"
      className={css({
        paddingInline: { base: '5px'!, md: '10px'!, xl: '60px'! },
        mx: "auto"
      })}
    >

      <div
        className={css({ textAlign: "center", mb: 10 })}
      >
        <CpuChipIcon
          className={css({ mx: "auto", w: 10, mb: 4 })}
        />
        <h2
          lang={language}
          className={css({ sm: { fontSize: "4xl" }, fontSize: "3xl", fontWeight: "medium", color: "black", mb: 4 })}
        >
          {language === "fr" ? "Compétences & Technologies" : "Skills & Technologies"}
        </h2>
      </div>
      <div
        className={hstack({ flexWrap: "wrap", sm: { mx: "auto", mb: 2 }, mx: 2, p: 2, justifyContent: "center" })}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={hstack({ p: 2, w: "", bg: "gray.800", rounded: "0.25rem", alignItems: "center" })}
          >
            <div>
              {skill.icon}
            </div>
            <h3
              className={css({ fontWeight: "medium", color: "white" })}
            >
              {skill.name}
            </h3>
          </div>

        ))}
      </div>

    </section>
  );
}
