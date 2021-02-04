import React, { useState, useEffect, Fragment } from "react";
import "./bestSellers.css"


const BestSellers = () => {
      const [ventas, setVentas] = useState([])

  const [numero, setNumero] = useState(0);

  const purchase = () => {
    setNumero(numero + 1);
  };

      useEffect(() => {
          console.log("useEffect")
          getInformation();

      }, [])

      const getInformation = async () => {
          const data = await fetch(
            "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products"
          );
          const products = await data.json()
          console.log(products);
          setVentas(products);
      }

  return (
    <Fragment>
      <h3>Mais Vendidos</h3>
      <div className="container-carousel">
        <div id="carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div className="col">
                  {/* <div class="bg-secondary py-4 text-white text-center">
                  {ventas.map((item) => (
                    <div key={item.id}>
                      <img src={item.img} />
                    </div>
                  ))}
                </div> */}
                  {ventas.map((item) => (
                    <div key={item.id}>
                      <img src={item.img} />
                      {item.category} <br />
                      {item.price} <br />
                      <button
                        type="button"
                        class="btn btn-dark"
                        onClick={purchase}
                      >
                        {" "}
                        Comprar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default BestSellers;

