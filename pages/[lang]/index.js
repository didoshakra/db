//HomePage.js / Muiv4.5.1
//Добавлено animat
import React, { useContext } from "react"
import Head from "next/head"
import Layout from "../../components/main/Layout"
import useTranslation from "../../translations/useTranslation"
import { ComponentContext } from "../../context/ComponentContext"
import HomeSlaider from "../../components/homePage/HomeSlaider"
import Products from "../../components/homePage/Products"
import Footer from "../../components/homePage/Footer"

export default function HomePage() {
  const disabled = false //Для buton
  const { locale, t } = useTranslation()
  const { state } = useContext(ComponentContext)
  const theme = state.theme

  return (
    // <AppFrame classes={{ drawer: className.drawer }}>
    // <Layout title={t("pageHome_title")} description={t("pageHome_description")}>
    <Layout title="BD" description={t("pageHome_description")}>
      <Head>
        {/* <title>{t("header-titleSite")}</title> */}
        <title>BD</title>
      </Head>
      {/*--HomeSlaider */}
      <HomeSlaider />
      {/* --Products */}
      <Products />
      <Footer />
      <style jsx>{`
      .home-slider-section {
          position: relative;
          height: 650px;
        }
        .slider-text h1 {
          font-size: 40px;
          color: white;
        }
        @media (min-width: 960px) {
          .slider-text h1 {
            font-size: 8vw;
          color: white;
          }
        }
        .image2 {
          background: 100% transparent url(/vegefoods/images/bg_1.jpg) no-repeat;
          z-index: 10;
        }
        .image1 {
          background: 100% transparent url(/vegefoods/images/bg_2.jpg) no-repeat;
          animation-delay: 5s; //Затримка анімації для 2-го слайду
          z-index: 10;
        }
        .slider-item {
          position: absolute; //Щоб не бачити цей <div> !!! Інакше 1-й слайд буде відкириватись за 1-м
          //position: relative; //1-й слайд буде відкириватись за 1-м
          //0,0,0,0-розтягує position: absolute; на весь батьківський блок не залежно від контенту
          //top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          align-items:center;
          justify-content:center;
          height: 650px;
          background-size: cover; //Маштабує зображення.
          background-repeat: no-repeat;
          background-position: center center;
          animation-name: coverSlide; //ім'я секції анімації
          animation-timing-function: linear; //рівномірна зміна
          animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
          animation-duration: 5s; //протяжність анімації
          animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
        }

        @keyframes coverSlide {
          0% {
            opacity: 1;
          }
          45% {
            opacity: 1;
          }
          55% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        from {
            //transform: scale(1.05);
          z-index:1  //Для видимості button

          }
          to {
            //transform: scale(1);
            z-index:0 //Для видимості button
          }
        }


        .overlay {
          position: absolute;
          //0,0,0,0-розтягує на весь батьківський блок не залежно від контенту
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: black;
          opacity: 0.2;
        }

        .slider-text {
          //position: absolute;//З аbsolute не працює центрування
          padding: 0 15px;
          display: flex;
          align-items: center; //Y-вертикально
          justify-content: center; //X-горизонтально
          flex-direction: column; //в стовбець
          text-align: center;
          height: 650px;//Треба
        }

        .subheading {
          color: black;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: inline-block;
          color: white;
        }
        .slider-text h1 {
          font-size: 40px
          //font-size: 8vw;
          color: white;
          line-height: 1.3;
          font-weight: 200;
          font-family: ${theme.fontFamily.mimicHand};
          //font-family: ${theme.fontFamily.notoSans};//!!! не працює/Локальний шрифт
          //font-family: Noto Sans;//Працює!!! Загрузка локального шрифта через <style jsx global> Loyout.js
        }

        .slider-text p {
          color: rgba(0, 0, 0, 0.8);
          font-weight: 400;
        }
        .button {
          display: fllex-line; //щоб не переносилась і ширина по контексту
          position: relative;
          padding: 6px 12px;
          //background: #70b4e6;
          background: #82ae46;
          //width: "";
          height: "40зч";
          color: #fff;
          border: 2px solid #82ae46;
          border-radius: 20px;
          //font-family: "Poppins,Geneva, Arial, sans-serif";
          //font-family: ${theme.fontFamily.sansSerif};
           font-size: 16px;
          //font-weight: "";
          //opacity: 1;
          //list-style-type: none;
          text-decoration: none;
          //z-index: 100;
        }
        .button:hover {
          background-color:rgba(132,177,71,.3);
          border: 1px solid #fff;
          //border: 1px solid rgba(42,66,10,1);
          // cursor: ${disabled ? "not-allowed" : "pointer"};
        }
      `}</style>
    </Layout>
  )
}
