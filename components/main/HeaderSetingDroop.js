//HeaderSetingDroop.js
//Мобіле-Шестерня(іконка) і випадаюче меню(LocaleSwitcherDroop)
//*********************************************************************************** */
//Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
// і відключення у всіх onClick(*togle) в самомк об'єкті.
//********************************************************************************** */
import { useState, useContext, useRef, useEffect } from "react"
import { ComponentContext } from "../../context/ComponentContext"
import useTranslation from "../../translations/useTranslation"
import LocaleSwitcherDroop from "./LocaleSwitcherDroop"
import IconSeting from "../ui/icons/head/IconSetting_border"
import IconGlobe from "../ui/icons/head/IconGlobe_border"
import IconMoon from "../ui/icons/head/IconMoon_border"
import IconSun from "../ui/icons/head/IconMoon_border"

const HeaderSetingDroop = () => {
  const { t } = useTranslation()
  const { state, dispatch } = useContext(ComponentContext)
  const { theme, themeTypeLight, profile } = state
  const [setingMenuOpen, setSetingMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(true)
  const [userMenuOpen, setUserMenuOpen] = useState(true)
  const [iconSetingHover, setIconSetingHover] = useState(false) //Для тоого щоб працював hover
  const [iconThemeHover, setIconThemeHover] = useState(false) //Для тоого щоб працював hover
  const [iconGlobeHover, setIconGlobeHover] = useState(false) //Для тоого щоб працював hover
  const iconSize = "25"

  //Для тоого щоб працював hover/Повинні бути і toggleHover і toggleNotHover інакше iconHover буде мінятись через раз
  //IconTheme
  const toggleIconSetingHover = () => {
    setIconSetingHover(true)
  }
  const toggleIconSetingNotHover = () => {
    setIconSetingHover(false)
  }
  //IconTheme
  const toggleIconThemeHover = () => {
    setIconThemeHover(true)
  }
  const toggleIconThemeNotHover = () => {
    setIconThemeHover(false)
  }
  //
  const toggleIconGlobeHover = () => {
    setIconGlobeHover(true)
  }
  const toggleIconGlobeNotHover = () => {
    setIconGlobeHover(false)
  }
  //Для клацання поза обєктом
  const wrapperRef = useRef(null) //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef) //Для клацання поза обєктом

  //Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
  // і відключення у всіх onClick(*togle) в самомк об'єкті.
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо клацнув поза елементом
        // alert("Ти клацнув поза мною!");
        setSetingMenuOpen(false) //Закриваєм меню Seting
        setLangMenuOpen(false) //Закриваєм меню Lang
        setUserMenuOpen(false) //Закриваєм меню
      }
    }
    useEffect(() => {
      // Прив’яжіть прослуховувач події
      // document.addEventListener("mousedown", handleClickOutside);//натиснули / віджали кнопку миші на елементі.
      document.addEventListener("scroll", handleClickOutside) //Для скролу
      document.addEventListener("click", handleClickOutside, false) //Кликнули на елемент лівою кнопкою миші (на пристроях з сенсорними екранами воно відбувається при торканні).
      return () => {
        // Від’єднайте слухача події під час очищення
        // document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("scroll", handleClickOutside)
        document.removeEventListener("click", handleClickOutside, false)
      }
    })
  }
  //випадаюче меню Налаштувань
  const setingMenuToggle = () => {
    setSetingMenuOpen(!setingMenuOpen)
    setLangMenuOpen(false) //Закриваєм меню Lang
    setUserMenuOpen(false) //Закриваєм меню
    // console.log("setingMenuToggle/setingMenuOpen=", setingMenuOpen);
  }
  //Зміна в newTheme Context
  const themeMenuToggle = () => {
    let newTheme = "light"
    if (themeTypeLight) {
      newTheme = "dark"
    }
    dispatch({ type: "THEME", payload: newTheme }) //Змінюємо state.theme
    // console.log("HeaderMenu.js/newTheme=", newTheme);
    setLangMenuOpen(false) //Закриваєм меню
    setUserMenuOpen(false)
  }
  //випадаюче меню Мов
  const langMenuOpenToggle = () => {
    setLangMenuOpen(!langMenuOpen)
    setUserMenuOpen(false) //Закриваєм меню
  }
  //випадаюче меню
  const userMenuOpenToggle = () => {
    setUserMenuOpen(!userMenuOpen)
    setLangMenuOpen(false)
  }

  return (
    <div ref={wrapperRef} className="headerSetingDroop">
      {/* іконка seting*/}
      <div
        className="headerSetingDroop__icon"
        onClick={setingMenuToggle}
        onMouseEnter={toggleIconSetingHover}
        onMouseLeave={toggleIconSetingNotHover}
      >
        <IconSeting
          width={iconSize}
          height={iconSize}
          colorFill={iconSetingHover ? theme.colors.headIconHover : theme.colors.headIcon}
        />
      </div>
      {/* список головного меню */}
      <ul className="headerSetingDroop__dropdown">
        <li
          className="headerSetingDroop__dropdown__item"
          onClick={themeMenuToggle}
          onMouseEnter={toggleIconThemeHover}
          onMouseLeave={toggleIconThemeNotHover}
        >
          {/* <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} /> */}
          <p
            title={t("headerMenu_iconTitleTheme")}
            onClick={themeMenuToggle}
            // onMouseEnter={toggleIconThemeHover}
            // onMouseLeave={toggleIconThemeNotHover}
          >
            {themeTypeLight ? (
              <IconMoon
                width={iconSize}
                height={iconSize}
                colorFill={iconThemeHover ? theme.colors.headIconHover : theme.colors.headIcon}
              />
            ) : (
              <IconSun
                width={iconSize}
                height={iconSize}
                colorFill={iconThemeHover ? theme.colors.headIconHover : theme.colors.headIcon}
              />
            )}
          </p>
          <p>Теми</p>
        </li>
        <li
          className="headerSetingDroop__dropdown__item"
          onClick={langMenuOpenToggle}
          onMouseEnter={toggleIconGlobeHover}
          onMouseLeave={toggleIconGlobeNotHover}
        >
          {/* // Від цього об'єкту li відраховуються відступи в випадаючих меню мов  */}
          {/* Випадаюче меню мов */}
          <LocaleSwitcherDroop langMenuOpen={langMenuOpen} setLangMenuOpen={setLangMenuOpen} />
          <p>
            <IconGlobe
              width={iconSize}
              height={iconSize}
              colorFill={iconGlobeHover ? theme.colors.headIconHover : theme.colors.headIcon}
            />
          </p>
          <p>Мови</p>
        </li>

      </ul>
      <style jsx global>{`
        .headerSetingDroop {
          position: relative;
          margin: 0;
          padding: 0;
        }
        .headerSetingDroop__icon {
          margin: 0;
          margin-right: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.headMobileIcon};
          background: ${theme.colors.headBackground};
          border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          width: 36px;
          height: 36px;
        }
        .headerSetingDroop__icon:hover {
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }

        .headerSetingDroop__dropdown {
          position: absolute;
          display: block;
          float: left;
          padding: 0;
          margin: 0;
          width: 150px;
          top: 50px;
          //bottom: -20px;
          left: -110px;
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: 1;
          opacity: ${setingMenuOpen ? "1" : "0"};
          z-index: ${setingMenuOpen ? "2" : "-2"};
          z-index: 2;
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }

        .headerSetingDroop__dropdown__item {
          display: flex;
          //position: relative;
          margin: 0;
          padding: 5px 10px;
          font-size: 18px;
          font-weight: 100;
          font-family: ${theme.fontFamily.serif};
          list-style-type: none;
          align-items: center;
          text-decoration: none;
          color: ${theme.colors.headText};
          background: ${theme.colors.headBackground};
        }
        .headerSetingDroop__dropdown__item:hover {
        //   color: ${theme.colors.headIconHover};
          background: ${theme.colors.headMenuBackgroundHover};
          cursor: pointer;
        }

        //при localeSwitcherDroop__menu__item:hover спрацьовує <p>
        .headerSetingDroop__dropdown__item:hover p {
          color: ${theme.colors.headMenuTextHover};
          background: ${theme.colors.headMenuBackgroundHover};
        }

        .headerSetingDroop__dropdown__item p {
          margin-left: 10px;
          padding: 0;
          display: flex;
          align-items: center; //Y Вирівнювання
          color: ${theme.colors.headMobileText};
          //   background: ${theme.colors.headMobileBackground};
          background: ${theme.colors.headBackground};
        }
        .UserSwitcher__avatar {
          //width: 100%;
          //height: 100%;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          //background-size: contain;
          background-size: cover;
          background-image: url("/avatar/2.jpg");
        }
      `}</style>
    </div>
  )
}

export default HeaderSetingDroop
