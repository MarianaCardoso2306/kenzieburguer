import { StyledProductsList } from "./style";
import { Product } from "../Product";
export const ProductsList = ({ searchProductList, handleClick }) => {
  return (
    <StyledProductsList>
      {searchProductList.map((product) => (
        <Product
          product={product}
          key={product.id}
          image={product.img}
          name={product.name}
          category={product.category}
          price={product.price}
          id={product.id}
          handleClick={handleClick}
        />
      ))}
    </StyledProductsList>
  );
};
