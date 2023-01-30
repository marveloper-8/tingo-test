import { theme } from "resources/theme";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: relative;
  background: ${theme.COLOR_GREY_1};
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 60px;
  margin: 0;
`;

export const NavItem = styled.li<any>`
  padding: 20px 10px;
  color: ${props => props.second ? theme.COLOR_BLUE_2 : theme.COLOR_WHITE};
  border-bottom: 2px solid ${props => props.second ? theme.COLOR_WHITE : theme.COLOR_GREY_1};
  cursor: pointer;
  ${props => props.active && `
    font-weight: bold;
    border-bottom: 2px solid ${props.second ? theme.COLOR_BLUE_1 : theme.COLOR_WHITE};
    ${props.second && `color: ${theme.COLOR_BLUE_1}`};
  `};
`;