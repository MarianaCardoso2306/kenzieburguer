import styled from "styled-components";

export const StyledButton = styled.button`
  width: 95%;
  background-color: var(--grey-20);
  color: var(--grey-50);

  padding: 22px 20px;

  font-size: 1rem;
  font-weight: 600;
  margin: 0 1rem 1rem 1rem;
  border: 2px solid var(--grey-20);
  :hover {
    background-color: var(--grey-50);
    color: #fff;
  }
`;
