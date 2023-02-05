import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  gap: 1.25rem;

  overflow-x: auto;

  @media (min-width: 769px) {
    overflow-x: none;

    flex-wrap: wrap;
  }
`;
