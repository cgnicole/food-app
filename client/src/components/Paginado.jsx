import "../styles/paginado.css";

export default function Paginado({
  recipesPerPage,
  allRecipes,
  currentRecipes,
  paginado,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="number" key={number}>
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
