//HeaderTape.js
import { useState, useContext } from "react"
// import Link from "next/link"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
// import { faPhoneAlt, faGlobe } from "@fortawesome/free-solid-svg-icons"
import IconPhone from "../ui/icons/social/IconPhone"
// import IconTwitter from "../ui/icons/social/IconTwitter"
import IconInstagram from "../ui/icons/social/IconInstagram_c2"
import IconFacebook from "../ui/icons/social/IconFacebook"
import { ComponentContext } from "../../context/ComponentContext"
import useTranslation from "../../translations/useTranslation"

const HeaderTape = () => {
  const { locale, t } = useTranslation()
  const { state } = useContext(ComponentContext)
  const { theme } = state
  const [iconFacebookHover, setIconFacebookHover] = useState(false) //Для тоого щоб працював hover
  const [iconInstagramHover, setIconInstagramHover] = useState(false) //Для тоого щоб працював hover
  const iconSize = "13"
  const fontSize = "13px"

  return (
    <div className="headerTape-section">
      <span className="headerTape__social">
        <span className="headerTape__social__text">
          {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
          <IconPhone width={iconSize} height={iconSize} colorFill={theme.colors.headTapeText} />+
          38(050-8580704/068-7892306)
        </span>
        {/* <span>
          <a
            href="https://www.instagram.com/roletydaynight"
            className="headerTape__social__icon"
            onMouseEnter={() => setIconInstagramHover(true)}
            onMouseLeave={() => setIconInstagramHover(false)}
          >
            <IconInstagram
              width={iconSize}
              height={iconSize}
              colorFill={iconInstagramHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
              colorFill1={iconInstagramHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
            />
          </a>
        </span>
        <a
          className="headerTape__social__icon"
          href="https://www.facebook.com/profile.php?id=100080681993195"
          onMouseEnter={() => setIconFacebookHover(true)}
          onMouseLeave={() => setIconFacebookHover(false)}
        >
          <IconFacebook
            width={iconSize}
            height={iconSize}
            colorFill={iconFacebookHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
            colorFill1={iconFacebookHover ? theme.colors.headTapeTextHover : theme.colors.headTapeText}
          />
        </a> */}
      </span>
      <span className="headerTape__announce">Вироби з нержавійки</span>
      {/* ======================================================================== */}
      <style jsx>{`
        .headerTape-section {
          top: 0;
          position: relative;
          padding: 0 1vw;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          background: ${theme.colors.headTapeBackground};
        }

        .headerTape__social {
          //display: block;
          //    margin: 1vw;
          //   align-items: center;
          align-items: flex-end;
          // padding: 1vw;
        }
        .headerTape__social__text {
          padding: 1vw;
          font-size: ${fontSize};
          color: ${theme.colors.headTapeText};
        }
        .headerTape__social__icon {
          padding: 1vw;
          align-items: center;
          color: ${theme.colors.headTapeText};
        }

        .headerTape__social__icon:hover {
          color: ${theme.colors.headTapeTextHover};
          //   background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }

        .headerTape__announce {
          //display: block;
          padding: 1vw;
          //   font-size: 10px;
          font-size: ${fontSize};
          color: ${theme.colors.headTapeText};
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (min-width: 600px) {
          .headerTape-section {
            height: 24px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}

export default HeaderTape
