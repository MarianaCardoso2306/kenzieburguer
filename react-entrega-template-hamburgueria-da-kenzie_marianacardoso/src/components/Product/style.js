import styled from "styled-components";

export const StyledProduct = styled.li`
  min-width: 19rem;
  height: 20rem;

  border: 2px solid var(--grey-20);
  border-radius: 5px;

  margin: 1rem 0;

  display: flex;
  flex-direction: column;

  .div-img {
    width: 100%;
    background-color: var(--grey-0);
  }

  img {
    width: 50%;
    margin: 0 25%;
  }

  p {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--grey-100);

    margin: 1rem;
  }

  .category {
    font-size: 0.75rem;
    color: var(--grey-50);

    margin-left: 1rem;
  }

  .price {
    font-size: 0.875rem;
    font-weight: 600;

    color: var(--color-primary);
    margin: 1rem;
  }

  button {
    padding: 10px 20px;

    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    color: #fff;

    font-size: 0.875rem;
    align-self: flex-start;
    margin-left: 1rem;
  }
  button:hover {
    background-color: var(--colocr-primary-50);
    border: 2px solid var(--color-primary-50);
  }
  @media (min-width: 769px) {
    min-width: 16rem;
    margin: 0;
  }
`;
