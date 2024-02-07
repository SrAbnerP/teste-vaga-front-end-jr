import "./SquareCard.scss";

interface SquareCardProps {
  image: string;
  name: string;
}

function SquareCard(props: SquareCardProps) {
  const { image, name } = props;
  return (
    <section className="square-card">
      <div className="card-image-content">
        <img
          src={image}
          alt="Imagem do produto"
          className="square-card-image"
        />
      </div>
      <h3 className="card-title">{name}</h3>
    </section>
  );
}

export default SquareCard;
