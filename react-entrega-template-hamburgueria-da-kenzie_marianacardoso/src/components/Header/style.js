import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100vw;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  align-items: center;

  background-color: var(--grey-0);

  form {
    width: 100%;
    display: flex;
    position: relative;
  }

  input {
    flex: 1;
    padding: 1.25rem 1rem;
  }

  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px 20px;

    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    color: #fff;

    font-size: 0.875rem;
  }
  button:hover {
    background-color: var(--colocr-primary-50);
    border: 2px solid var(--color-primary-50);
  }
  @media (min-width: 769px) {
    padding: 1rem 115px;
    flex-direction: row;
    justify-content: space-between;

    form {
      width: auto;
    }

    input {
      width: 365px;
      flex: none;
    }
  }
`;
