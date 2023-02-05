import { StyledProduct } from "./style";
import { useState, useEffect } from "react";

export const Product = ({ image, name, category, price, id, handleClick }) => {
  return (
    <StyledProduct>
      <div className="div-img">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
      <span className="category">{category}</span>
      <span className="price">R$ {price.toFixed(2)}</span>
      <button id={id} onClick={handleClick}>
        Adicionar
      </button>
    </StyledProduct>
  );
};
