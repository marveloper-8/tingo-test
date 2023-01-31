import * as STYLE from 'styles/widgets'

const ButtonWidget = (props: any) => {
  return (
    <STYLE.Button
      background={props.background}
      color={props.color}
      onClick={props.function}
      nav={props.nav}
    >
      {props.value}
    </STYLE.Button>
  );
}

export default ButtonWidget;
