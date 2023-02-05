import styled from "styled-components";

export const StyledCartProduct = styled.li`
  height: 5rem;
  display: flex;
  justify-content: space-between;

  align-items: center;
  div {
    display: flex;
  }

  .div-img {
    height: 5rem;
    width: 5rem;
    background-color: var(--grey-20);

    margin-right: 0.625rem;
  }
  .infos {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    p {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--grey-100);
      span {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-secondary);
      }
    }
    span {
      font-size: 0.75rem;
      color: var(--grey-50);
    }
  }
  button {
    background-color: var(--grey-0);
    border: none;
    align-self: flex-start;

    margin-top: 0.5rem;

    font-weight: 500;
    font-size: 0.75rem;
    color: #bdbdbd;
  }
`;
