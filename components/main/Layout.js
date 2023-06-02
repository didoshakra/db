//https://reacttricks.com/learn-react-by-building-websites-with-next
//Layout.js
// динамічнИЙ імпорт <Header /> і <Footer /> для вибраного APP

import React, { useContext } from "react"
import Head from "next/head"
import Header from "./Header"
import HeaderTape from "./HeaderTape"
// import Footer from "./main/Footer";
import { ComponentContext } from "../../context/ComponentContext"
import useTranslation from "../../translations/useTranslation"

// const Header = dynamic(import("./Header"));//Тут теж працює

const Layout = ({ children, PageTitle, PageDescription }) => {
  const { t } = useTranslation()
  const { state } = useContext(ComponentContext)
  const { theme } = state

  return (
    <div className="site-wrapper">
      <Head>
        <title>
          {t("loyOut_title")} | {PageTitle ? `${PageTitle}  ` : ""}
        </title>
        {PageDescription ? <meta name="description" content={PageDescription} /> : null}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
      </Head>
      {/* Самий верхній рядок Header/ телефон-соціалка*/}
      <HeaderTape />
      {/* 2-й рядок Header/Логотип-рядок меню-конка мобільного меню-Налаштування(Теми,Мови) */}
      <Header />
      <div className="loyout__content-wrapper">{children}</div>
      {/* <Footer /> */}
      {/* ========================================================================== */}
      <style jsx global>{`
        //global Next.js
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          text-rendering: optimizeLegibility;
        }

        h1,
        h2,
        h3 {
          margin: 40px 0 30px;
        }

        h1 {
          font-size: 42px;
        }

        h2 {
          font-size: 36px;
        }

        p {
          // margin: 0 0 10px;
          margin: 0;
          padding: 0;
        }

        img {
          max-width: 100%;
        }
      `}</style>
      <style jsx global>{`
        //Для динамічних стилів окремо
        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
        }
      `}</style>
      <style jsx>{`
        /* Layout */
        site-wrapper {
          width: 100%;
          display: block;
          padding: 0;
          margin: 0;
        }
        .loyout__content-wrapper {
          position: relative;
          top: 0px;
          //   margin-top: 64px; /*Щоб контент не заїжджав під шапку*/
          min-height: 600px;
          text-align: center;
          padding: 0px;
        }
      `}</style>
    </div>
  )
}

export default Layout
