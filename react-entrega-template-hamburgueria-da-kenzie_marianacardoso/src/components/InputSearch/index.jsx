import { useState } from "react";

export const Input = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={searchValue}
        placeholder="Digitar Pesquisa"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
};
