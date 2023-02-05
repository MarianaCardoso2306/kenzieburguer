import { StyledTotal } from "./style";

export const Total = ({ currentSale }) => {
  const sum = currentSale.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <StyledTotal className="total">
      <hr />
      <div>
        <p>Total</p>
        <span>R$ {sum.toFixed(2)}</span>
      </div>
    </StyledTotal>
  );
};
