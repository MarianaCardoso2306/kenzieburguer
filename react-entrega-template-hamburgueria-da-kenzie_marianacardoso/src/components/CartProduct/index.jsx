import { StyledCartProduct } from "./style";

export const CartProduct = ({
  image,
  name,
  category,
  id,
  count,
  removeProductFromCart,
}) => {
  return (
    <StyledCartProduct>
      <div>
        <div className="div-img">
          <img src={image} alt="" />
        </div>
        <div className="infos">
          <p>
            {name} <span>({count})</span>
          </p>
          <span>{category}</span>
        </div>
      </div>
      <button id={id} onClick={removeProductFromCart}>
        Remover
      </button>
    </StyledCartProduct>
  );
};
