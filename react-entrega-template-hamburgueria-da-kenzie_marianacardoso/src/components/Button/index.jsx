import { StyledButton } from "./style";

export const Button = ({ removeAllProductsFromCart }) => {
  return (
    <StyledButton id="removeAllProducts" onClick={removeAllProductsFromCart}>
      Remover todos
    </StyledButton>
  );
};
