import { theme } from "resources/theme";
import styled from "styled-components";
import thirdPartBackground from 'images/woman.png'
import fifthPartBackground from 'images/ceo.png'
import sixthPartBackground from 'images/market.png'

// first part
export const FullScreen = styled.section`
  height: 90vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const FullScreenTop = styled.div`
  position: relative;
  background: ${theme.COLOR_WHITE};
  padding: 100px 450px 100px 100px;
  z-index: 10;
`;

export const FullScreenTopImage1 = styled.img`
  position: absolute;
  bottom: -25vh;
  height: 50vh;
  right: 100px;
`;

export const FullScreenTopImage2 = styled.img<any>`
  position: absolute;
  bottom: -17.5vh;
  height: 35vh;
  right: ${props => props.right + 125}px;
`;

export const Asteriks = styled.img`
  position: absolute;
  height: 75px;
  bottom: -37.5px;
  left: 100px;
`;

export const FullScreenBottom = styled.div<any>`
  position: relative;
  background: ${theme.GRADIENT_BLUE};
  color: ${theme.COLOR_WHITE};
  padding: 50px 100px;
`;

// second part
export const SecondPart = styled.section`
  padding: 100px;
  grid-gap: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${theme.COLOR_WHITE};
`;

export const SecondPartItem = styled.div`
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 40px;
  background: ${theme.COLOR_WHITE};
`;

export const SecondPartItemIcon = styled.img`
  height: 50px;
`;

// third part
export const ThirdPart = styled.section`
  padding: 100px;
  grid-gap: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${theme.COLOR_WHITE};
  align-items: center;
`;

export const ThirdPartBackground = styled.div`
  background-image: url(${thirdPartBackground});
  background-size: cover;
  height: 530px;
  border-radius: 8px;
`;

// fourth part
export const FourthPart = styled.section`
  padding: 100px;
  grid-gap: 65px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: ${theme.COLOR_WHITE};
`;

export const FourthPartGridContainer = styled.div`
  grid-gap: 65px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FourthPartGrid = styled.img<any>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: 300px;
  border-radius: 8px;
`;

// fifth part
export const FifthPart = styled.section`
  padding: 100px;
  background: ${theme.COLOR_WHITE};
  text-align: center;
`;

export const FifthPartGridContainer = styled.div`
  grid-gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 50px;
`;

export const FifthPartGrid = styled.div`
  background-image: url(${fifthPartBackground});
  background-size: cover;
  height: 400px;
  border-radius: 4px;
`;

export const FifthPartNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

// sixth part
export const SixthPartSubtitle = styled.p`
  padding: 0 300px;
`;

export const SixthPartImage = styled.div`
  background-image: url(${sixthPartBackground});
  background-size: cover;
  height: 540px;
  border-radius: 8px;
  margin-top: 120px;
`;

// contact
export const ContactInfoWrapper = styled.div`
  margin-top: 50px;
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ContactInfoIcon = styled.img`
  height: 30px;
`;

export const ContactForm = styled.form`
  padding: 65px 55px;
  border: 1px solid ${theme.COLOR_GREY_2};
  border-radius: 8px;
  text-align: center;
`;

export const ContactFormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32.5px;
  margin-bottom: 30px;
`;

export const ContactInputDouble = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

// Footer
export const FooterContainer = styled.footer`
  padding: 65px 100px;
  background: ${theme.COLOR_BLUE_1};
  color: ${theme.COLOR_WHITE};
  display: grid;
  gap: 50px;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 100px;
`;

export const FooterList = styled.ul<any>`
  list-style-type: none;
  display: flex;
  gap: ${props => props.small ? '15px' : '60px'};
  padding: 0;
  margin: 0;
`;

export const FooterListSecondary = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 12px;
`;

export const FooterIcon = styled.img`
  height: 32px;
`;