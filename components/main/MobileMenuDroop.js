//MobileMenuDroop.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Випадаюче меню(Мобіле)
import React, { useContext, useRef, useEffect } from "react"
import Link from "next/link"
import useTranslation from "../../translations/useTranslation"
import { ComponentContext } from "../../context/ComponentContext"

const MobileMenuDroop = (props) => {
  const { state } = useContext(ComponentContext)
  const theme = state.theme
  const { locale } = useTranslation()

  //*** Для клацання поза обєктом ***/
  //Добавити в контрольований об'єкт-(ref={wrapperRef})- (<ul ref={wrapperRef}... )
  const wrapperRef = useRef(null) //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef) //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      // Посилання  на вказаний елемент іконки  (ClassName="mobileMenuIcon" з модуля MobileMenuIcon.js) який треба виключити
      const iconBlock = document.getElementsByClassName(
        // "mobileMenu__droop__icon"
        "mobileMenuIcon"
      )[0]
      //!e.path.includes(iconBlock)-чи є в списку батьківських або дочінрних елементів      вищезгаданий елемент
      //Проверяем, есть ли в списке родительских или дочерних элементов, вышеуказанный компонент
      // console.log("MobileMenuDroop.js/mobileMenu__droop__icon=", iconBlock);
      if (ref.current && !ref.current.contains(event.target) && !event.path.includes(iconBlock)) {
        //Якщо поза елементом
        // alert("Ти клацнув поза мною!")
        if (props.mobileMenuOpen) {
          props.mobileMenuToggle(false) //Закриваєм меню
        }
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
  //end/*** Для клацання поза обєктом ***/

  const renderMenu = () => {
    return props.menu.map((item, index) => {
      return (
        <li className="mobileMenuDroop__dropdown__item" key={index}>
          <Link href={`/[lang]${item.link}`} as={`/${locale}${item.link}`}>
            {/* <p className="g-nav__item-a">{item.a}</p> */}
            <span>{item.a}</span>
          </Link>
        </li>
      )
    })
  }

  return (
    //  Мобільна навігація
    <div className="MobileMenuDroop">
      {/* <ul ref={wrapperRef}>{props.renderMenu()}</ul> */}
      <ul className="mobileMenuDroop__dropdown" ref={wrapperRef}>
        {renderMenu()}
      </ul>

      <style jsx global>{`
        .mobileMenuDroop__dropdown__item {
          margin: 0;
          padding: 0; //Щоб зробити заокруглення
          padding: 5px 10px; //Щоб зробити заокруглення
          text-decoration: none;
        }

        .mobileMenuDroop__dropdown__item span:hover {
          color: ${theme.colors.headMobileTextHover};
          background: ${theme.colors.headMobileTextBackgroundHover};
          cursor: pointer;
        }
        .mobileMenuDroop__dropdown__item:hover {
          color: ${theme.colors.headMobileTextHover};
          background: ${theme.colors.headMobileTextBackgroundHover};
          cursor: pointer;
        }
        //Щоб мінявся і <a> пр наведенні на mobileMenuDroop__dropdown__item
        .mobileMenuDroop__dropdown__item:hover span {
          color: ${theme.colors.headMobileTextHover};
          background: ${theme.colors.headMobileTextBackgroundHover};
          cursor: pointer;
        }
        .mobileMenuDroop__dropdown__item span {
          font-size: 15px; //Рукавичка
          font-weight: 100; //грубина
          font-family: ${theme.fontFamily.serif};
          color: ${theme.colors.headMobileText};
        //   background: ${theme.colors.headMobileBackground};
          background: ${theme.colors.headBackground};
        }
      `}</style>

      <style jsx>{`
        .MobileMenuDroop {
          position: relative;
          top: 0px;
          left: 0px;
          display: ${props.mobileMenuOpen ? "block" : "none"};
          height: 100%;
          height: 230px;
        //   background: ${theme.colors.headMobileBackground};
          background: ${theme.colors.headBackground};
          transition: display 0.4s ease-in;
        }

        .mobileMenuDroop__dropdown {
          padding: 0; //треба
          margin: 0; //треба
        }
      `}</style>
    </div>
  )
}

export default MobileMenuDroop
