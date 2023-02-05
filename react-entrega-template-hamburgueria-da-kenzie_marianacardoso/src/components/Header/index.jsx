import { StyledHeader } from "./style";
import LogoBurguerKenzie from "../../assets/LogoBurguerKenzie.svg";
import { Input } from "../InputSearch";

export const Header = ({ setSearch }) => {
  return (
    <StyledHeader>
      <img src={LogoBurguerKenzie} alt="" />
      <Input setSearch={setSearch} />
    </StyledHeader>
  );
};
