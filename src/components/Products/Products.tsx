import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

import "./Products.scss";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductsProps {
  products: Product[];
}

function Products(props: ProductsProps) {
  const { products } = props;
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex < products.length - 4) {
      setStartIndex(startIndex + 2);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 2);
    }
  };

  return (
    <section className="product">
      <div className="product-content">
        <div className="navbar-product">
          <a href="#">CELULAR</a>
          <a href="#">ACESSÓRIOS</a>
          <a href="#">TABLES</a>
          <a href="#">TVS</a>
          <a href="#">VER TODOS</a>
        </div>
      </div>

      <div className="carousel-container">
        <button className="carousel-control prev" onClick={prevSlide}>
          <svg
            width="20"
            height="34"
            viewBox="0 0 20 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.03939L16.9666 0L0 17L16.9666 34L20 30.9606L6.06684 17L20 3.03939Z"
              fill="#3F3F40"
            />
          </svg>
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <svg
            width="20"
            height="34"
            viewBox="0 0 20 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 30.9606L3.03342 34L20 17L3.03342 0L0 3.03939L13.9332 17L0 30.9606Z"
              fill="#3F3F40"
            />
          </svg>
        </button>
        <div className="carousel-wrapper">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${startIndex * (100 / 3.5)}%)`,
            }}
          >
            {products.map((product, index) => (
              <ProductCard key={index} products={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
