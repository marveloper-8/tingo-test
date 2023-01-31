import { theme } from "resources/theme";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: relative;
  background: ${theme.COLOR_GREY_1};
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px){
    padding: 0 20px;
  };
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Navigation = styled.ul<any>`
  list-style-type: none;
  display: flex;
  gap: 40px;
  margin: 0;
  ${props => props.nav && `
    @media screen and (max-width: 1000px){
      position: fixed;
      background: ${theme.COLOR_GREY_1};
      padding: 30px 0;
      height: 100vh;
      width: 100vw;
      z-index: 100;
      color: ${theme.COLOR_WHITE};
      flex-direction: column;
      top: 0;
      left: 0;
      ${!props.activeMenu && 'left: -100vw;'};
      transition: .5s ease all;
    };
  `};
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

export const NavMenu = styled.span<any>`
  display: none;
  color: ${theme.COLOR_WHITE};
  ${props => props.close && 'text-align: right;'};
  font-size: ${theme.TEXT_TITLE_2};
  @media screen and (max-width: 1000px){
    display: block;
  };
`;