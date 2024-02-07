import { useContext, useState } from "react";

import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

import "./ProductDetail.scss";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const { setSelectedProduct, product } = useContext(AppContext);

  const closeDetails = () => {
    setSelectedProduct(false);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-detail-overlay">
      <div className="product-detail">
        <button className="close-button" onClick={closeDetails}>
          X
        </button>
        <div className="product-info">
          <img
            src={product.photo}
            alt="imagem do produto"
            className="product-image"
          />
          <div className="product-details">
            <h2>{product.productName}</h2>

            <h3 className="price">{formatCurrency(product.price, "BRL")}</h3>
            <p>{product.descriptionShort}</p>
            <a href="#">Veja mais detalhes do produto &rsaquo;</a>
            <div className="quantity-control">
              <button onClick={decreaseQuantity}>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.53816 9.81812H16.3843"
                    stroke="#041E50"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6925 4.09094V15.5455"
                    stroke="#041E50"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.76863 9.81812H16.6148"
                    stroke="#041E50"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button type="button" className="buy-button">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
