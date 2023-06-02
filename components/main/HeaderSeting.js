//HeaderSeting  /Верхнє меню
//Викликає меню(з іконоками) :UserSwitcher/ThemeSwitcher/LocaleSwitcher

import {  useContext } from "react"
import { ComponentContext } from "../../context/ComponentContext"
import ThemeSwitcher from "./ThemeSwitcher"

const HeaderSeting = () => {
  const { state } = useContext(ComponentContext)
  const theme = state.theme

  return (
    <div className="headerSeting">
      {/* Іконки головного меню Seting */}
      <div className="headerSeting_larg">
        {/* тема */}
        <ThemeSwitcher />
      </div>

      <style jsx>
        {`
          .headerSeting {
            /*padding: 10px; /*Поля*/
            height: 64px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // background: ${theme.colors.headMobileBackground};
            background: ${theme.colors.headBackground};
          }
          .headerSeting_larg {
            display: none;
          }

          @media (min-width: 960px) {
            .headerSeting_larg {
              display: flex;
            }

            .headerSeting {
              background: ${theme.colors.headBackground};
            }
          }
        `}
      </style>
    </div>
  )
}

export default HeaderSeting
