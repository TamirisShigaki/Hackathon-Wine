import React from "react";
import "../css/notFound.css";
import construcao from "../image/construcao.gif";

const Clube = () => {
  return (
    <div className="container-construcao">
      <img
        src={construcao}
        alt="Ilustração de um operário de obras juntamente com placas de sinalização indicando obras em andamento"
      />
    </div>
  );
};

export default Clube;
