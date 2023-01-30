import styled from "styled-components";
import { theme } from "resources/theme";

export const AppContainer = styled.section`
  position: relative;
  color: ${theme.COLOR_BLUE_1};
`;

export const Title = styled.div`
  font-weight: bolder;
  font-size: ${theme.TEXT_TITLE};
`;

export const Title2 = styled.h1<any>`
  font-weight: bold;
  font-size: ${theme.TEXT_TITLE_2};
  ${props => props.noMargin && `margin: 0`};
`;