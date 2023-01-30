import * as STYLE from 'styles/landing'
import * as GENERAL_STYLE from 'styles/general'
import { FC } from 'react';

const SecondPartItemComponent: FC<any> = ({data}) => {
  return (
    <STYLE.SecondPartItem>
      <STYLE.SecondPartItemIcon src={data.icon} />
      <GENERAL_STYLE.Title2 noMargin>{data.title}</GENERAL_STYLE.Title2>
      <p>{data.content}</p>
    </STYLE.SecondPartItem>
  );
}

export default SecondPartItemComponent;
