import { useState, useEffect } from "react";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";
import { api } from "./services/api";
import { Cart } from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localCart = localStorage.getItem("@productsCart");
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localCart ? JSON.parse(localCart) : []
  );
  const [search, setSearch] = useState("");

  const searchProductList = products.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          product.category.toLowerCase().includes(search.toLocaleLowerCase());
  });

  useEffect(() => {
    async function loadProductsData() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProductsData();
  }, []);

  useEffect(() => {
    localStorage.setItem("@productsCart", JSON.stringify(currentSale));
  }, [currentSale]);

  const handleClick = (event) => {
    const productId = event.target.id;
    const foundProduct = products.find((element) => element.id == productId);

    setCurrentSale(
      currentSale.map((productSale) =>
        productSale.id === foundProduct.id
          ? { ...productSale, count: productSale.count + 1 }
          : productSale
      )
    );

    if (
      currentSale.every((productSale) => productSale.id !== foundProduct.id)
    ) {
      setCurrentSale([...currentSale, { ...foundProduct, count: 1 }]);
    }

    toast.success("Produto adicionado ao carrinho");
  };

  const removeProductFromCart = (event) => {
    const productId = event.target.id;

    const index = currentSale.findIndex((product) => product.id == productId);

    const updatedCurrentSale = [...currentSale];
    const product = updatedCurrentSale[index];

    if (product.count > 1) {
      product.count = product.count - 1;
    } else {
      updatedCurrentSale.splice(index, 1);
      toast.success("Produto removido do carrinho");
    }
    setCurrentSale(updatedCurrentSale);
  };

  const removeAllProductsFromCart = () => {
    const emptyCurrentSale = [...currentSale];
    emptyCurrentSale.splice(0, emptyCurrentSale.length);
    setCurrentSale(emptyCurrentSale);
    toast.warning("Carrinho vazio");
  };

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <main className="container">
        {search && (
          <div className="search">
            <p>
              Resultados de busca para: <span>{search}</span>
            </p>
            <button onClick={() => setSearch("")}>Limpar a busca</button>
          </div>
        )}
        <section className="container-infos">
          <ProductsList
            searchProductList={searchProductList}
            handleClick={handleClick}
          />
          <Cart
            removeProductFromCart={removeProductFromCart}
            removeAllProductsFromCart={removeAllProductsFromCart}
            currentSale={currentSale}
          />
        </section>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
