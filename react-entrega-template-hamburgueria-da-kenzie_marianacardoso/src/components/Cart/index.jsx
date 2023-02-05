import { StyledCart } from "./style";
import { CartProduct } from "../CartProduct";
import { Total } from "../CartTotal";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Button";

export const Cart = ({
  removeProductFromCart,
  currentSale,
  removeAllProductsFromCart,
}) => {
  return (
    <StyledCart>
      <h2>Carrinho de compras</h2>
      <ul>
        {currentSale.length > 0 ? (
          currentSale.map((productSale) => (
            <CartProduct
              product={productSale}
              key={uuidv4()}
              image={productSale.img}
              name={productSale.name}
              category={productSale.category}
              id={productSale.id}
              count={productSale.count}
              removeProductFromCart={removeProductFromCart}
            />
          ))
        ) : (
          <div className="empty-cart">
            <p>Sua sacola está vazia</p>
            <span>Adicione itens</span>
          </div>
        )}
      </ul>
      {currentSale.length > 0 && (
        <div className="total">
          <Total currentSale={currentSale} />
          <Button removeAllProductsFromCart={removeAllProductsFromCart} />
        </div>
      )}
    </StyledCart>
  );
};
