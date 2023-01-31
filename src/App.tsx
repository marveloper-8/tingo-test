import NavigationComponent from 'components/navigation';
import * as GENERAL_STYLE from 'styles/general'
import * as STYLE from 'styles/landing'
import fullscreenTop1 from 'images/man.png'
import fullscreenTop2 from 'images/man-and-woman.png'
import asteriks from 'icons/asteriks.svg'
import { bottomLandingData, contactInfo, footer, fourthPart, secondPart, socials } from 'resources/data';
import SecondPartItemComponent from 'components/second-part-item';
import ButtonWidget from 'widgets/button';
import ContactInfo from 'components/contact-info';
import { useState } from 'react';
import user from 'icons/user.svg'
import email from 'icons/email.2.svg'
import phone from 'icons/phone.2.svg'
import InputWidget from 'widgets/input';
import { theme } from 'resources/theme';
import * as NAV_STYLE from 'styles/navigation'
import logo from 'icons/logo.svg'
import { useRef } from 'react';
import { teamNavigation } from 'resources/navigation';
import NavItem from 'components/nav-item';

const App = () => {
  const [active, setActive] = useState(teamNavigation[0].value);
  const [firstName, setFirstName] = useState({
    value: "",
    placeholder: "First Name",
    type: "text",
    icon: user
  });

  const [emailAddress, setEmailAddress] = useState({
    value: "",
    placeholder: "Email Address",
    type: "email",
    icon: email
  });

  const [phoneNumber, setPhoneNumber] = useState({
    value: "",
    placeholder: "Phone Number",
    type: "phone",
    icon: phone
  });

  const [message, setMessage] = useState({
    value: "",
    placeholder: "Message",
    type: "textarea"
  });

  const ref: any = useRef();
  const [firstImageWidth, setFirstImageWidth] = useState()
  

  setTimeout(() => {
    if(window){
      setFirstImageWidth(ref.current.offsetWidth)
    }
  }, 1000);
  

  return (
    <GENERAL_STYLE.AppContainer>
      <NavigationComponent />
      <STYLE.FullScreen>
        <STYLE.FullScreenTop>
          <div>ABOUT US</div>
          <GENERAL_STYLE.Title>We are Building an Ecosystem for Diverse Solutions</GENERAL_STYLE.Title>
          <STYLE.FullScreenTopImage1 ref={ref} src={fullscreenTop1} />
          <STYLE.FullScreenTopImage2 right={firstImageWidth} src={fullscreenTop2} />
          <STYLE.Asteriks src={asteriks} />
        </STYLE.FullScreenTop>
        <STYLE.FullScreenBottom>
          {bottomLandingData.map((item: any) => <GENERAL_STYLE.Title2>{item}</GENERAL_STYLE.Title2>)}
        </STYLE.FullScreenBottom>
      </STYLE.FullScreen>
      

      <STYLE.SecondPart>
        {secondPart.map((item: any) => <SecondPartItemComponent data={item} />)}
      </STYLE.SecondPart>


      <STYLE.ThirdPart>
        <STYLE.ThirdPartBackground />
        <div>
          <GENERAL_STYLE.Title2>African's leading Agri-Fintech Company</GENERAL_STYLE.Title2>
          <p>Tingo is an Agri-Fintech company offering a comprehensive platform service through use of smartphones (using GSM technology) to empower a marketplace to enable subscribers/farmers within and outside of the agricultural sector to manage their commercial activities of growing and selling their production to market participants both domestically and internationally.</p>
          <p>The ecosystem provides a ‘one stop shop’ solution to enable such subscribers to manage everything from airtime top ups, bill pay services for utilities and other service providers, access to insurance services and micro finance to support their value chain from ‘seed to sale’.</p>
        </div>
      </STYLE.ThirdPart>


      <STYLE.FourthPart>
        <div>
          <GENERAL_STYLE.Title2>Our solutions are all geared towards making life easy & fun.</GENERAL_STYLE.Title2>
          <p>We offer an all-in-one payment solution to businesses in order to help them optimize their services..</p>
        </div>
        <STYLE.FourthPartGridContainer>
          {fourthPart.map((item: any) => <STYLE.FourthPartGrid image={item} />)}
        </STYLE.FourthPartGridContainer>
      </STYLE.FourthPart>


      <STYLE.FifthPart>
        <GENERAL_STYLE.Title2>Meet the Team</GENERAL_STYLE.Title2>
        <STYLE.FifthPartNavigation>
          <NAV_STYLE.Navigation>
            {teamNavigation.map((item: any) => {
              return (
                <NavItem
                  value={item.value}
                  function={() => setActive(item.value)}
                  active={active === item.value}
                  second
                />
              )
            })}
          </NAV_STYLE.Navigation>
        </STYLE.FifthPartNavigation>
        
        <STYLE.FifthPartGridContainer>
          {Array(8).fill('').map((item: any) => <STYLE.FifthPartGrid />)}
        </STYLE.FifthPartGridContainer>
        <ButtonWidget
          value='Learn More'
          function={() => alert("Learn more")}
        />
      </STYLE.FifthPart>


      <STYLE.FifthPart>
        <GENERAL_STYLE.Title2>We're on a Mission</GENERAL_STYLE.Title2>
        <STYLE.SixthPartSubtitle>We pride ourselves as a growth and solution driven organization with a mission to create the world’s largest ecosystem for diverse solutions</STYLE.SixthPartSubtitle>
        <STYLE.SixthPartImage />
      </STYLE.FifthPart>


      <STYLE.ThirdPart>
        <STYLE.ContactInfoWrapper>
          <GENERAL_STYLE.Title2>CONTACT INFO</GENERAL_STYLE.Title2>
          <p>Fill in the form and our Team will get back to you within 24hrs</p>
          {contactInfo.map((item: any) => <ContactInfo data={item} />)}
        </STYLE.ContactInfoWrapper>
        <STYLE.ContactForm>
          <STYLE.ContactFormInner>
            <InputWidget
              data={firstName}
              setData={setFirstName}
            />
            <STYLE.ContactInputDouble>
              <InputWidget
                data={emailAddress}
                setData={setEmailAddress}
              />
              <InputWidget
                data={phoneNumber}
                setData={setPhoneNumber}
              />
            </STYLE.ContactInputDouble>
            <InputWidget
              data={message}
              setData={setMessage}
            />
          </STYLE.ContactFormInner>
          <ButtonWidget
            value='Send Message'
            background={theme.COLOR_BLUE_1}
            function={() => alert("Send Message")}
          />
        </STYLE.ContactForm>
      </STYLE.ThirdPart>

      <STYLE.FooterContainer>
        <STYLE.FooterWrapper>
          <div>
            <NAV_STYLE.Logo src={logo} />
            <p>Make it as easy as possible to pay. Modular or combined with other services, our payment technologies ensure swift implementation. What’s more, you can flexibly adapt our proven standard solutions to suit each country and application. Lastingly slash your operating costs and boost your sales.</p>
          </div>
          <STYLE.FooterList>
            {footer.map((item: any) => {
              return (
                <li>
                  <h1>{item.title}</h1>
                  <STYLE.FooterListSecondary>
                    {item.values.map((item: any) => <li onClick={item.function}>{item.title}</li>)}
                  </STYLE.FooterListSecondary>
                  
                </li>
              )
            })}
          </STYLE.FooterList>
        </STYLE.FooterWrapper>
        <STYLE.FooterWrapper>
          <STYLE.FooterList small>
            {socials.map((item: any) => (
              <li onClick={item.function}>
                <STYLE.FooterIcon src={item.icon} />
              </li>
            ))}
          </STYLE.FooterList>
          <div>Copyright © 2023 Tingo mobile. All rights reserved</div>
        </STYLE.FooterWrapper>
      </STYLE.FooterContainer>
    </GENERAL_STYLE.AppContainer>
  );
}

export default App;
