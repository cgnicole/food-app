import React from "react";
import "../styles/card.css";

const Card = ({ name, image, diets }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>

        <div className="card-diets">
          <p className="card-diets-label">Dieta:</p>
          <ul className="card-diets-list">
            {Array.isArray(diets) &&
              diets.map((diet) => (
                <li key={diet} className="card-diet">
                  {diet}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
