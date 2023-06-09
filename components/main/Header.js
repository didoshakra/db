//Header.js// Викликає всі меню/Саме меню
//20200416-добавляю 2-а діва (для верхньої стрічки-HeaderTape і нажнього випадаючого на весь екран MobileMenu)
import { useState, useContext, useEffect } from "react"
import { ComponentContext } from "../../context/ComponentContext"
import useTranslation from "../../translations/useTranslation"
import HeaderLogo from "./HeaderLogo"
import HeaderMenu from "./HeaderMenu"
import HeaderSeting from "./HeaderSeting"
import MobileMenuIcon from "./MobileMenuIcon"
// import MobileMenuDroop from "./MobileMenuDroop"

var lastScrollTop = 0
var scrolUP = false

const Header = () => {
  const { state } = useContext(ComponentContext)
  const { theme } = state
  const { locale, t } = useTranslation()
  const heightHeaderTape = "24px" //Висота header0
  const heightHeader = "64px" //Висота header0
  const headerNone = "-96px" //Сховати
  const [headerTop, setHeaderTop] = useState(heightHeaderTape) //-відступ зверху/ щоб ховалась /появлялась Head при скролі
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(true)

  const mobileMenuToggle = (arg) => {
    setMobileMenuOpen(arg)
    console.log("Menu.js/mobileMenuOpen2/arg =", arg)
  }

  //*** щоб ховалась/появлялась Head при скролі
  function mouseMove() {
    // alert("Ти порухав мишкою!/mousemove");
    // console.log("Header.js/скрол=", pageYOffset);
    // console.log("Header.js/Y=", event.pageY);
    var st = scrollY
    // console.log("Header.js/st=", st + "/lastScrollTop=", lastScrollTop);
    if (st > 10) {
      if (st - lastScrollTop > 0 || (st - lastScrollTop == 0 && !scrolUP)) {
        // console.log("Скрол вниз!");
        scrolUP = false
        // alert("Скрол вниз!");
        if (st > 200) {
          setHeaderTop("0px")
        } else {
          setHeaderTop(headerNone)
          // downscroll code
        }
      } else {
        if (st > 32) {
          setHeaderTop("0px")
        } else {
          setHeaderTop(heightHeaderTape)
        }
        scrolUP = true
        // console.log("Скрол вверх!");
      }
    } else {
      setHeaderTop(heightHeaderTape)
    }
    lastScrollTop = st
  }

  useEffect(() => {
    // Прив’яжіть прослуховувач події
    document.addEventListener("scroll", mouseMove) //Для скролу
    // document.addEventListener("mousemove", mouseMove);//для переміщення мишки (координати)
    return () => {
      // Від’єднайте слухача події під час очищення
      document.removeEventListener("scroll", mouseMove)
      // document.removeEventListener("mousemove", mouseMove);
    }
  })
  //End/*** щоб ховалась.../

  const menu = [
    {
      a: t("headerMenu_home"),
      link: "/",
    },
    // {
    //   a: t("headerMenu_shop"),
    //   link: "/",
    // },
    {
      a: t("headerMenu_about"),
      link: "/",
    },
    // {
    //   a: t("headerMenu_blog"),
    //   link: "/",
    // },
    {
      a: t("headerMenu_contact"),
      link: "/",
    },
  ]

  return (
    <div className="header-section">
      <div className="header-conteiner">
        <div className="header-conteiner__menu-begin">
          {/* Ліве випадаюче меню */}
          {/* <Drawer /> */}
          {/* Логотип */}
          <HeaderLogo />
        </div>
        <div className="header-conteiner__menu-end">
          {/* Навігація/ рядок меню */}
          <HeaderMenu menu={menu} />
          {/* іконка мобільного меню/faList/ */}
          <MobileMenuIcon mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle} />
          {/* Налаштування(Теми,Мови)*/}
          <HeaderSeting />
        </div>
      </div>
      {/* Список мобильного меню */}
      {/* <MobileMenuDroop menu={menu} mobileMenuOpen={mobileMenuOpen} mobileMenuToggle={mobileMenuToggle} /> */}
      {/* ============================================================================================= */}
      <style jsx>{`
        .header-section {
          position: relative;
        }

        .header-conteiner {
          margin: 0;
          padding: 0 1vw;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${theme.colors.headIcon};
          //   background: ${theme.colors.headMobileBackground};
          background: ${theme.colors.headBackground};
        }
        .header-conteiner__menu-end {
          display: flex;
          justify-content: space-end;
          align-items: center;
        }
        .header-conteiner__menu-begin {
          display: flex;
          //   justify-content: space-end;
          align-items: center;
        }

        @media (min-width: 960px) {
          .header-section {
            // Для того щоб плавно сховати шапку
            margin: 0;
            padding: 0;
            position: fixed;
            top: ${headerTop};
            height: ${heightHeader};
            width: 100%;
            transition: top 0.4s ease-in;
            z-index: 100;
          }
          .header-conteiner {
            height: ${heightHeader};
            background: ${theme.colors.headBackground};
          }
        }
      `}</style>
    </div>
  )
}

export default Header