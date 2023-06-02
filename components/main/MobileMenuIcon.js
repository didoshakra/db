//MobileMenuIcon.js ////Іконка(своя) яка викликає MobileMenuDroop-випадаюче меню
//список меню з масиву props.menu

import React, { useContext, useState } from "react"
import useTranslation from "../../translations/useTranslation"
import { ComponentContext } from "../../context/ComponentContext"
import IconList from "../ui/icons/head/IconListP_thin" //рисочки з крапочками (тонкі)

const MobileMenuIcon = (props) => {
  const { t } = useTranslation()
  const { state } = useContext(ComponentContext)
  const { theme } = state
 const [iconHover, setIconHover] = useState(false) //Для тоого щоб працював hover
 const iconSize = "25"

 //Для тоого щоб працював hover
 //Повинні бути і toggleHover і toggleNotHover бо інакше iconHover уде мінятись через раз
 const toggleHover = () => {
   setIconHover(true)
 }
 const toggleNotHover = () => {
   setIconHover(false)
 }

  return (
    // Навігація
    <div className="mobileMenuIcon">
      {/* іконка мобільного меню */}
      <p
        className="mobileMenuIcon__icon"
        onClick={() => props.mobileMenuToggle(props.mobileMenuOpen ? false : true)}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleNotHover}
        title={t("headerMenu_iconTitleNavMenu")}
      >
        {/* <FontAwesomeIcon icon={faList} /> */}
        <IconList
          width={iconSize}
          height={iconSize}
          colorFill={iconHover ? theme.colors.headIconHover : theme.colors.headIcon}
          // colorFill={theme.colors.headIcon}
        />
      </p>

      <style jsx>{`
        .mobileMenuIcon {
          margin: 0;
          margin-right: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.headMobileIcon};
          background: ${theme.colors.headBackground};
          border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 40px;
          width: 40px;
          height: 40px;
        }

        .mobileMenuIcon__icon {
          margin-right: 5px; //Відступ від кожного елемента зліва
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
        }

        .mobileMenuIcon__icon:hover {
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }

        @media (min-width: 960px) {
          .mobileMenuIcon {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default MobileMenuIcon
