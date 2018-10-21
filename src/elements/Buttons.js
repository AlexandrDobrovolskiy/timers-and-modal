import styled from "styled-components";

const UnstyledButton = styled.button`
  padding: none;
  border: none;

  :focus {
    outline: none;
  }
`;

export const Button = styled(UnstyledButton)`
	text-transform: uppercase;
	cursor: pointer;
`;
