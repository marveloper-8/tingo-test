import { theme } from "resources/theme";
import styled from "styled-components";

// buttons
export const Button = styled.button<any>`
  padding: 12px;
  background: ${props => props.background ? props.background : theme.COLOR_ORANGE_1};
  color: ${props => props.color ? props.color : theme.COLOR_WHITE};
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// inputs
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.COLOR_GREY_2};
  border-radius: 6px;
`;

export const InputIcon = styled.img`
  margin-left: 16px;
`;

export const Input = styled.input`
  padding: 14px 16px;
  display: block;
  flex: 1;
  outline: none;
  border: none;
  background: none;
  &::placeholder{
    color: ${theme.COLOR_GREY_3};
  };
`;
export const TextArea = styled.textarea`
  padding: 14px 16px;
  height: 200px;
  display: block;
  flex: 1;
  outline: none;
  border: none;
  background: none;
  &::placeholder{
    color: ${theme.COLOR_GREY_3};
  };
`;