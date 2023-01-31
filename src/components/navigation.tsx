import * as STYLE from 'styles/navigation'
import logo from 'icons/logo.svg'
import ButtonWidget from 'widgets/button';
import { navigation } from 'resources/navigation';
import NavItem from './nav-item';
import { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai'

const NavigationComponent = () => {
  const [active, setActive] = useState(navigation[0].value);
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <STYLE.NavigationContainer>
      <STYLE.Logo src={logo} />
      <STYLE.Navigation nav activeMenu={activeMenu}>
        <STYLE.NavMenu close onClick={() => setActiveMenu(false)}>
          <AiOutlineCloseCircle />
        </STYLE.NavMenu>
        {navigation.map((item: any) => {
          return (
            <NavItem
              value={item.value}
              function={() => setActive(item.value)}
              active={active === item.value}
            />
          )
        })}
      </STYLE.Navigation>
      <ButtonWidget
        value='Get in Touch'
        function={() => alert("Contact us")}
        nav
      />
      <STYLE.NavMenu onClick={() => setActiveMenu(true)}>
        <AiOutlineMenu />
      </STYLE.NavMenu>
    </STYLE.NavigationContainer>
  );
}

export default NavigationComponent;
