import "./FullCard.scss";

import fullImage from "../../image/fullimage.jpeg";

function FullCard() {
  return (
    <section className="full-card-content">
      <img src={fullImage} alt="Imagem de fundo" />
      <div className="overlay">
        <div className="text-content">
          <h2>
            Venha conhecer nossas <br /> promoções
          </h2>
          <p>50% off nos produtos</p>
          <button type="button"> Ver produto</button>
        </div>
      </div>
    </section>
  );
}

export default FullCard;
