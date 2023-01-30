import * as STYLE from 'styles/navigation'
import logo from 'icons/logo.svg'
import ButtonWidget from 'widgets/button';
import { navigation } from 'resources/navigation';
import NavItem from './nav-item';
import { useState } from 'react';

const NavigationComponent = () => {
  const [active, setActive] = useState(navigation[0].value);
  return (
    <STYLE.NavigationContainer>
      <STYLE.Logo src={logo} />
      <STYLE.Navigation>
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
      />
    </STYLE.NavigationContainer>
  );
}

export default NavigationComponent;
