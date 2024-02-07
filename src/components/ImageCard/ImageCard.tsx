import "./ImageCard.scss";

import imageCard from "../../image/imageCard.jpeg";

interface ImageCardProps {
  width: number;
  height: number;
  borderRadius: number;
}

function ImageCard(props: ImageCardProps) {
  const { width, height, borderRadius } = props;

  return (
    <article className="image-card">
      <div
        className="image-card-content"
        style={{ width: `${width}px`, borderRadius: `${borderRadius}px` }}
      >
        <img
          src={imageCard}
          alt="Imagem de fundo"
          style={{ height: `${height}px` }}
        />
        <div className="image-card-overlay">
          <div className="image-text-content">
            <h2>Parceiros</h2>
            <p>
              Lorem ipsum dolor sit <br /> amet, consectetur
            </p>
            <button type="button">CONFIRA</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ImageCard;
