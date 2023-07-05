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
          <p>{diets}</p>
          {console.log(diets)}
          {/* <ul className="card-diets-list"> */}
          {/* // En esa parte del código, se está realizando una verificación
            antes de ejecutar el método map() */}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

// ❗️ codigo sinla verificacion del arreglo

// import React from "react";
// import "../styles/card.css";

// const Card = ({ name, image, diets }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={name} className="card-image" />
//       <div className="card-content">
//         <h3 className="card-title">{name}</h3>

//         <div className="card-diets">
//           <p className="card-diets-label">Dieta:</p>
//           <ul className="card-diets-list">
//             {diets.map((diet) => (
//               <li key={diet} className="card-diet">
//                 {diet}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
