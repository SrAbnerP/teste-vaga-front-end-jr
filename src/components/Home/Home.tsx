import { useContext, useEffect, useState } from "react";

import "./Home.scss";

import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

import FullCard from "../FullCard/FullCard";
import ImageCard from "../ImageCard/ImageCard";
import Products from "../Products/Products";
import SquareCard from "../SquareCard/SquareCard";
import ProductDetail from "../ProductDetail/ProductDetail";
import CarouselCicle from "../CarouselCicle/CarouselCicle";

import computerSquare from "../../image/computerSquare.png";
import storeSquare from "../../image/storeSquare.png";
import drinkSquare from "../../image/drinkSquare.png";
import ferraSquare from "../../image/ferraSquare.png";
import lifeSquare from "../../image/lifeSquare.png";
import runSquare from "../../image/runSquare.png";
import clothesSquare from "../../image/clotheSquare.png";

function Home() {
  const [products, setProducts] = useState<any[]>([]);

  const { selectedProduct } = useContext(AppContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
        console.log(products);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
        console.log(products);
      }
    };

    getProducts();
  }, []);

  return (
    <section>
      <div className="full-card-content">
        <FullCard />
      </div>
      <div className="home-content">
        <SquareCard image={computerSquare} name="Tecnologia" />
        <SquareCard image={storeSquare} name="Supermercado" />
        <SquareCard image={drinkSquare} name="Bebidas" />
        <SquareCard image={ferraSquare} name="Ferramentas" />
        <SquareCard image={lifeSquare} name="Saúde" />
        <SquareCard image={runSquare} name="Esportes e Fitness" />
        <SquareCard image={clothesSquare} name="Moda" />
      </div>

      <div className="title-home">
        <h2 className="title-line">Produtos relacionados</h2>
      </div>

      <div className="product-card-content">
        <Products products={products} />
      </div>

      {selectedProduct && <ProductDetail />}

      <div className="home-content">
        <ImageCard width={574} height={350} borderRadius={20} />
        <ImageCard width={574} height={350} borderRadius={20} />
      </div>

      <div className="title-home title-margin">
        <h2 className="title-line">Produtos relacionados</h2>
        <h3>Ver todos</h3>
      </div>

      <div className="home-content">
        <ImageCard width={589.73} height={284} borderRadius={10} />
        <ImageCard width={589.73} height={284} borderRadius={10} />
      </div>

      <div className="title-home title-margin">
        <h2>Navegue por marcas</h2>
      </div>

      <div className="home-content">
        <CarouselCicle cicles={15} />
      </div>
    </section>
  );
}

export default Home;
