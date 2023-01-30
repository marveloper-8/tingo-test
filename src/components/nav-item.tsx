import * as STYLE from 'styles/navigation'

const NavItem = (props: any) => {
  return (
    <STYLE.NavItem second={props.second} active={props.active} onClick={props.function}>
      {props.value}
    </STYLE.NavItem>
  );
}

export default NavItem;
