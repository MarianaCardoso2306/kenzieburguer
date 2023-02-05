import styled from "styled-components";

export const StyledCart = styled.aside`
  margin-top: 3.25rem;
  background-color: var(--grey-0);

  h2 {
    background-color: var(--color-primary);
    color: #fff;

    padding: 22px 20px;

    font-size: 1.125rem;
    font-weight: 700;
  }
  .empty-cart {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    align-items: center;

    padding: 3.75rem 0 2.75rem 0;

    p {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--grey-100);
    }
    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: var(--grey-50);
    }
  }
  ul {
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 769px) {
    min-width: 365px;
    margin-top: 0;
  }
`;
