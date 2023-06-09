//Products.js
import Image from "next/image"
import { useContext } from "react"
import IconMenu from "../ui/icons/IconMenu"
import IconCart from "../ui/icons/IconCart"
import IconHeart from "../ui/icons/IconHeart"
import { ComponentContext } from "../../context/ComponentContext"

const Products = () => {
  const { state } = useContext(ComponentContext)
  const theme = state.theme
  const products = [
    {
      id: 1,
      title: "Балкон кутовий",
      image: "/images/products/DBBalkon1.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 2,
      title: " Балкон трапеція",
      image: "/images/products/DBBalkon2.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 128.0,
      // discontProc: 30,
    },
    {
      id: 3,
      title: "Балкон дуговий",
      image: "/images/products/DBBalkon3.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 120.0,
      // discontProc: 0,
    },
    {
      id: 4,
      title: "Сходи",
      image: "/images/products/DBShoduZov.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 30,
    },
    {
      id: 5,
      title: "Сходи квабрат",
      image: "/images/products/DBShoduKv.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 30,
    },
    {
      id: 6,
      title: "Сходи",
      image: "/images/products/DBShodu.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      discontProc: 0,
    },
    {
      id: 7,
      title: "Сходи",
      image: "/images/products/DBShoduVn.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 8,
      title: "Сходи",
      image: "/images/products/DBShoduVn1.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 20,
      title: "Сходи",
      image: "/images/products/DBShoduZov.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 9,
      title: "Тераса1",
      image: "/images/products/DBTerasa1.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 30,
    },
    {
      id: 10,
      title: "Тераса",
      image: "/images/products/DBTerasa2.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 30,
    },

    {
      id: 11,
      title: "Веранда внутрішня",
      image: "/images/products/DBVerandaVn.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      id: 12,
      title: "Опора під виноград",
      image: "/images/products/BDVunograd.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 13,
      title: "Ворота",
      image: "/images/products/DBVorota3.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 14,
      title: "Ворота",
      image: "/images/products/DBVorota1.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 15,
      title: "Решітка на вікно",
      image: "/images/products/DBVikno.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      discontProc: 0,
    },
    {
      id: 16,
      title: "Лавка",
      image: "/images/products/DBLavka.jpg",
      description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 17,
      title: "Паркан",
      image: "/images/products/DBParkan.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 18,
      title: "Паркан",
      image: "/images/products/DBParkan1.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      discontProc: 0,
    },
    {
      id: 19,
      title: "Паркан",
      image: "/images/products/DBParkan2.jpg",
      description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },

    {
      id: 21,
      title: "Рушникосушка-квадратна труба",
      image: "/images/products/DBSushilka.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 22,
      title: "Рушникосушка-квадратна труба",
      image: "/images/products/DBSushilka1.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 23,
      title: "Рушникосушка-квадратна труба",
      image: "/images/products/DBSushilka2.jpg",
      // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
    {
      id: 26,
      title: "Балкон плюс навіс",
      image: "/images/products/DBBalkonNavis.jpg",
      description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
      // price: 20.0,
      // discontProc: 0,
    },
  ]

  return (
    <section className="products-section">
      <div className="products-header-row">
        <div className="products-header-column">
          <span className="products-header-column__subheading">Рекомендовані вироби</span>
          <h2 className="mb-4">Наші вироби</h2>
        </div>
      </div>
      <div className="products-gallery">
        {/* {products.map((item, index) => { */}
        {products.map((item) => {
          return (
            <div className="products-container" key={item}>
              {/* {item.discontProc > 0 ? <div className="products-container__discount-proc">{item.discontProc}%</div> : ""} */}
              <h3>{item.title}</h3>
              <img className="products__img" src={item.image} alt="img" />
              {/* <div>
                <h3>{item.name}</h3>
              </div> */}

              {/* <div>
                <div className="products-container_icons-container">
                  <div className="products-container_icon">
                    <IconMenu
                      width="15"
                      height="15"
                      colorFill="#fff"
                      colorFill1="#fff"
                      colorFill2="#fff"
                      colorStroke="#fff"
                      colorStroke1="#fff"
                      colorStroke2="#fff"
                    />
                  </div>
                  <div className="products-container_icon">
                    <IconCart
                      width="15"
                      height="15"
                      colorFill="#fff"
                      colorFill1="#fff"
                      colorFill2="#fff"
                      colorFill3="#fff"
                      colorStroke="#fff"
                      colorStroke1="#fff"
                      colorStroke2="#fff"
                      colorStroke3="#fff"
                      colorStroke4="#fff"
                    />
                  </div>
                  <div className="products-container_icon">
                    <IconHeart width="15" height="15" colorFill="#fff" colorStroke="#fff" />
                  </div>
                </div>
              </div> */}
              {/* <div className="products-container__price-container">
                {item.discontProc > 0 ? (
                  <p className="products-container__discount">
                    {(item.price - (item.price * item.discontProc) / 100).toFixed(2)}
                  </p>
                ) : (
                  ""
                )}
                <p className="products-container__price">₴{item.price.toFixed(2)}</p>
              </div> */}
            </div>
          )
        })}
      </div>
      <style jsx>{`
        .products-section {
          padding: 6rem 2vw; //rem-шрифт кореневого
          position: relative;
          //border: 2px solid #82ae46;
        }
        .products-header-row {
          margin-bottom: 3rem; //mb-5
          padding: 0 5vw 1rem; //Відступи всередині контейнера row
          display: flex; //row
          flex-wrap: wrap; //row
          justify-content: center; //justify-content-center
          align-items: center;
          //border: 1px solid rgba(63, 93, 35, 1);
        }

        .products-header-column {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          //border: 1px solid #82ae46;
        }

        .products-header-column__subheading {
          font-size: 18px;
          display: block;
          margin-bottom: 10px;
          font-family: ${theme.fontFamily.serif};
          font-style: italic;
          color: #82ae46;
          font-weight: 500;
        }

        .products-header-column h2 {
          margin-bottom: 1.5rem;
          position: relative;
          font-size: 28px;
          font-weight: 600;
          color: #000000;
        }
        .products-header-column p {
          margin-top: 0;
          margin-bottom: 1rem;
          color: gray;
        }

        @media (min-width: 768px) {
          //h2
          .products-header-row {
            padding: 0 15vw 1rem; //Відступи всередині контейнера row
          }
          .products-header-column h2 {
            font-size: 40px;
          }
        }
        //
        .products-gallery {
          display: flex;
          flex: 0 1 auto;
          flex-wrap: wrap;
          //justify-content: stretch; //'авто-розмір'
          justify-content: space-between;
          //margin: 0 auto;
        }
        .products-container {
          position: relative;
          box-sizing: border-box; //Width і height включають в себе значення полів і кордонів
          //width: 375px;
          width: calc(100%-2vw);
          //   height: 420px;
          height: 320px;
          border: 1px solid #c21d252d;
          //
          display: flex;
          flex: 0 1 auto;
          flex-direction: column; //в стовбець;
          justify-content: flex-start; //Тут по Y
          align-items: center; //по X
          text-align: center;
          flex: 1 1 auto;
          margin: 0 0 30px;
          overflow: hidden; //Не показує все за межами блоку
        }
        .products-container:hover .products-container_icons-container {
          //cursor: pointer; //рука
          opacity: 1;
          transition: opacity 0.5s ease-out;
        }
        .products-container:hover .products-container__price-container {
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }
        .products-container:hover .products__img {
          //filter: blur(2px);//розмите зображення
          transform: scale(1.1);
          transition: scale 3s ease-out;
        }

        .products-container__discount-proc {
          position: absolute;
          left: 0;
          //bottom: 0;
          top: 0;
          font-size: 15px;
          //font-weight: bold;
          color: #fff;
          background-color: #82ae46;
          /* //text-transform: uppercase;//великі літери */
          text-decoration: none;
          z-index: 1;
        }
        .products-container_icons-container {
          position: absolute;
          bottom: 1rem;
          left: 0; //Привязка для absolute;/ Для вирівнювання по центру X
          width: 100%; //Для вирівнювання по центру X
          display: flex;
          flex-direction: row;
          justify-content: center; //X
          align-items: center; //Y
          opacity: 0;
        }
        .products-container_icon {
          display: flex;
          justify-content: center; //X
          align-items: center; //Y
          width: 40px; //
          height: 40px;
          border-radius: 50%;
          border: 1px solid #fff; /* Параметры границы */
          background: #82ae46;
        }
        .products__img {
          padding: 2vw 0;
          width: 100%;
          //   height: 270px;/   /Висота вирахлвуються при маштабуванні картинки(для cover треба 2-а розміри)
          object-fit: contain; //вся картинка з попорціями/контейнер не заповнений
          //object-fit: cover; //вся картинка з попорціями/контейнер не заповнений
        }

        .products-container h3 {
          margin: 0 0 15px;
        }
        .products-container a {
          font-size: 14px;
          text-transform: uppercase; //великі літери
          font-weight: normal;
        }
        .products-container__price-container {
          margin: 0 1rem 1rem;
          display: flex;
          flex-direction: row;
          text-align: center;
          justify-content: center; //Тут по Y //R-щоб рівняло по верху
          align-items: center; //Y але тут по X
        }
        .products-container__discount {
          margin: 0 10px;
          text-decoration: line-through;
          font-size: 15px;
          color: #83ae46e8;
        }
        .products-container__price {
          color: #82ae46;
          font-size: 15px;
          font-weight: bold;
        }

        @media (min-width: 600px) {
          .products-section {
            padding: 40px 5vw;
          }
          .products-container {
            margin: 10px;
            width: calc((100% - 40px - 10vw) / 2); //Щирина при 2-х колонках
            //width: calc((100% - 240px- 20vw) / 2); //Щирина при 2-х колонках
            //width: 700px; //Щирина при 2-х колонках
          }
        }
        @media (min-width: 960px) {
          .products-container {
            //height: 300px;
            width: calc((100% - 80px - 10vw) / 4); //Щирина при 2-х колонках
          }
        }
        //Mobi
      `}</style>
    </section>
  )
}

export default Products
