//HeaderLogo.js

import Link from "next/link"
import { useContext } from "react"
import useTranslation from "../../translations/useTranslation"
import { ComponentContext } from "../../context/ComponentContext"
// import Drawer from "./Drawer";

const HeaderLogo = () => {
  const { state } = useContext(ComponentContext)
  const theme = state.theme
  const { locale, t } = useTranslation()

  return (
    <div className="headerLogo">
      {/* <Link href="/[lang]" as={`/${locale}`}>
        <a className="headerLogo__icon">
          <img title={t("logo_logoTitle")} src="/icons/RoletY-elips60-93.png" alert="logo" />
        </a>
      </Link> */}
      <Link href="/[lang]" as={`/${locale}`}>
        <a className="headerLogo__text" title={t("logo_logoTitle")}>
          DBogdan
          {/* DBStainless */}
        </a>
      </Link>
      {/* ========================================================================== */}
      <style jsx>{`
        .headerLogo {
          margin: 0 10px;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .headerLogo__text {
          padding: 0 1vw;
          text-decoration: none;
          font-family: ${theme.fontFamily.sansSerif};
          font-size: 20px;
          font-weight: 800;
          color: ${theme.colors.headLogoText};
          background: ${theme.colors.headBackground};
        }
        .headerLogo__text:hover {
          color: ${theme.colors.headLogoTextHover};
        }

        @media (min-width: 960px) {
          .headerLogo__text {
            color: ${theme.colors.headLogoText};
            background: ${theme.colors.headBackground};
          }

          .headerLogo__text:hover {
            color: ${theme.colors.headLogoTextHover};
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  )
}
export default HeaderLogo
