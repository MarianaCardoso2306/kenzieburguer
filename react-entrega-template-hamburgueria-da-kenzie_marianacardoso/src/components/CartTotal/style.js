import styled from "styled-components";

export const StyledTotal = styled.div`
  hr {
    margin: 0 1.5rem;
    color: var(--grey-20);
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    font-size: 0.875rem;

    p {
      color: var(--grey-100);
      font-weight: 600;
    }
    span {
      color: var(--grey-50);
    }
  }
`;
