import { useContext } from "react";

import "./ProductCard.scss";

import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductCardProps {
  products: Product;
}

function ProductCard(props: ProductCardProps) {
  const { products } = props;

  const { setSelectedProduct, setProduct } = useContext(AppContext);

  const openDetails = () => {
    setProduct(products);
    setSelectedProduct(true);
  };
  return (
    <section className="product-card" onClick={openDetails}>
      <img
        src={products.photo}
        alt="Imagem do produto"
        className="card-image"
      />
      <div className="card-infos">
        <h2 className="card-name">{products.productName}</h2>
        <h3 className="card-old-price">
          <s>R$ 30,90</s>
        </h3>
        <h2 className="card-price">{formatCurrency(products.price, "BRL")}</h2>
        <h4 className="card-parc">ou 2x de R4 49,95 sem juros</h4>
        <h4 className="card-frete">frete gratis</h4>
      </div>

      <button type="button" className="button-buy">
        COMPRAR
      </button>
    </section>
  );
}

export default ProductCard;
