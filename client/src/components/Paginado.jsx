import React from "react";
import "../styles/paginado.css";

export default function Paginado({
  recipesPerPage,
  allRecipes,
  paginado,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginado(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginado(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="paginado">
        {currentPage > 1 && (
          <li className="arrow-button">
            <button onClick={handlePrevPage}>&lt;</button>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li
            className={`number ${number === currentPage ? "active" : ""}`}
            key={number}
          >
            <button onClick={() => paginado(number)}>{number}</button>
          </li>
        ))}

        {currentPage < pageNumbers.length && (
          <li className="arrow-button">
            <button onClick={handleNextPage}>&gt;</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
