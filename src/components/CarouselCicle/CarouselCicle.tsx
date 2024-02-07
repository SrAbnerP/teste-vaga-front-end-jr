import { useState } from "react";
import CicleCard from "../CicleCard/CicleCard";

import "./CarouselCicle.scss";

interface CarouselCicleProps {
  cicles: number;
}

function CarouselCicle(props: CarouselCicleProps) {
  const { cicles } = props;

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex < cicles - 4) {
      setStartIndex(startIndex + 4);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
    }
  };

  const cicleCards = [];
  for (let i = 0; i < cicles; i++) {
    cicleCards.push(<CicleCard key={i} />);
  }

  return (
    <section className="cicle-carousel">
      <div className="cicle-carousel-container">
        <div
          className="cicle-carousel-inner"
          style={{ transform: `translateX(-${startIndex * (100 / 5)}%)` }}
        >
          {cicleCards.map((cicleCard, index) => (
            <div className="cicle-card-wrapper" key={index}>
              {cicleCard}
            </div>
          ))}
        </div>
      </div>
      {startIndex > 0 && (
        <button className="cicle-carousel-btn cicle-prev" onClick={prevSlide}>
          ❮
        </button>
      )}
      {startIndex < cicles - 5 && (
        <button className="cicle-carousel-btn cicle-next" onClick={nextSlide}>
          ❯
        </button>
      )}
    </section>
  );
}

export default CarouselCicle;
