import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
  margin: 1rem;
  width: 20rem;
  align-content: center;
    
  h4 {
    font-weight: 500;
    padding: 0.5rem 0;

  }

  a {
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
    color: #3182ce;
  }

  &:hover {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
`;
