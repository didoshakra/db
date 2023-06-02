//*** */
//20080425-добавлені шрифти //Amatic SC,Poppins,Lora-https://fonts.googleapis.com/ з шаблону
// _do
export const themes = ["light", "dark", "other"]

export const themesNames = {
  light: "Світла",
  dark: "Темна",
  other: "Інша",
}

//Для тем будемо міняти тільки кольори(theme.colors.)
export const themeLith = {
  fontFamily: {
    sansSerif: "Poppins-Regular,Arial,sans-serif", //звичайні шрифти без засічок
    serif: "Lora-Regular,Georgia, serif", //звичайні шрифти з засічками
    mimicHand: "AmaticSC-Regular, cursive", //шрифти, що імітують почерк
    fixedWidth: "MajorMonoDisplay-Regular, monospace", //Всі гліфи мають однакову фіксовану ширину
    decorative: "Trattatello,fantasy", //декоративні шрифти, для назв
  },
  colors: {
    text: "#060214",
    background: "#fff", //білий/
    //----------------------------------------------
    headTapeText: "#fff",
    headTapeBackground: "#82AE46",
    headTapeTextHover: "red",
    headTapeTextBackgroundHover: "#82AE46",
    //----------------------------------------------
    headText: "#82AE46",
    headBackground: "#fff", //білий headTextHover: "#fff", //білий/
    // headBackground: "#DCDCDC", //білий headTextHover: "#fff", //білий/
    headTextHover: "#fff",
    headBackgroundHover: "#82AE46",
    //----------------------------------------------
    headLogoText: "#82AE46",
    headLogoTextHover: "red",
    //----------------------------------------------
    headMobileText: "#82AE46",
    headMobileTextHover: "red",
    headMobileBackground: "rgba(65,69,69,1)",
    headMobiletBackgroundHover: "#fff", //білий
    headMobileIcon: "red",
    //----------------------------------------------
    // headIcon: "rgba(23,25,25,1)",
    headIcon: "#82AE46",
    headIconHover: "red",
    headIconBackground: "rgba(65,69,69,1)",
    headIconBackgroundHover: "#82AE46",
    headIconBorderWidht: "0px",
    headIconBorderStyle: "dotted",
    //----------------------------------------------
    headMenuText: "#82AE46",
    headMenuTextHover: "#fff",
    headMenuBackground: "#fff",
    headMenuBackgroundHover: "#82AE46",
    headMenuActive: "#fff",
    headMenuBackgroundActive: "red",
    headMenuBackgroundHoverGoriz: "#f64532",
    //----------------------------------------------
    headDroopMenuText: "#82AE46",
    headDroopMenuTextHover: "#fff",
    // headDroopMenuBackground: "#fff",
    headDroopMenuBackground: "#DCDCDC",
    headDroopMenuBackgroundHover: "#82AE46",
    headDroopMenuBackgroundActive: "red",
    // -----------------------------------------------
    paperBackground: "rgb(223, 222, 222)",
    paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    paperHeadBackground: "rgba(187,190,190,1)",
    paperHeadBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    //----------------------------------------------------
    cardBackground: "rgba(187,190,190,0.5)",
    cardBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
  },
}

export const themeDark = {
  fontFamily: {
    sansSerif: "Poppins-Regular,Arial,sans-serif", //звичайні шрифти без засічок
    serif: "Lora-Regular,Georgia, serif", //звичайні шрифти з засічками
    mimicHand: "AmaticSC-Regular, cursive", //шрифти, що імітують почерк
    fixedWidth: "MajorMonoDisplay-Regular, monospace", //Всі гліфи мають однакову фіксовану ширину
    decorative: "Trattatello,fantasy", //декоративні шрифти, для назв
  },
  colors: {
    text: "#fff", //чорний
    background: "rgba(65,69,69,1)",
    //----------------------------------------------
    headTapeText: "#82AE46",
    headTapeBackground: "rgba(65,69,69,1)",
    headTapeTextHover: "red",
    headTapeTextBackgroundHover: "rgba(65,69,69,1)",
    //----------------------------------------------
    headText: "#fff", //білий
    headBackground: "rgba(65,69,69,1)",
    headTextHover: "rgba(23,25,25,1)",
    headTextBackgroundHover: "#fff", //білий
    //----------------------------------------------
    headLogoText: "#82AE46",
    headLogoTextHover: "red",
    //----------------------------------------------
    headMobileText: "#82AE46", //білий
    headMobileTextHover: "red",
    headMobileBackground: "rgba(65,69,69,1)",
    headMobileBackgroundHover: "#fff", //білий
    headMobileIcon: "red", //білий,
    //----------------------------------------------
    // headIcon: "#fff", //білий
    headIcon: "#82AE46", //білий
    headIconHover: "red",
    headIconBackgroun: "rgba(65,69,69,1)", //білий
    headIconBackgroundHover: "#82AE46",
    headIconBorderWidht: "0px",
    headIconBorderStyle: "dotted",
    //----------------------------------------------
    headMenuText: "#82AE46",
    headMenuTextHover: "#fff",
    headMenuBackground: "rgba(65,69,69,1)", //білий
    headMenuBackgroundHover: "#82AE46",
    headMenuActive: "#fff",
    headMenuBackgroundActive: "red",
    headMenuBackgroundHoverGoriz: "#f64532",
    //----------------------------------------------
    headDroopMenuText: "#82AE46",
    headDroopMenuTextHover: "#fff",
    headDroopMenuBackground: "rgba(65,69,69,1)",
    headDroopMenuBackgroundHover: "#82AE46",
    headDroopMenuBackgroundActive: "red",
    //----------------------------------------------
    paperBackground: "rgba(65,69,69,1)",
    paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    paperHeadBackground: "rgba(64,61,51,1)",
    paperHeadBoxShadow: "2px 2px 2px rgba(23,25,25,0.9)",
    //------------------------------------------------
    cardBackground: "rgba(64,61,51,0.6)",
    cardBoxShadow: "2px 2px 2px rgba(23,25,25,0.9)",
  },
}
