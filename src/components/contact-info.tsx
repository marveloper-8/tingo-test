import * as STYLE from 'styles/landing'
import { FC } from 'react';

const ContactInfo: FC<any> = ({data}) => {
  return (
    <STYLE.ContactInfo>
      <STYLE.ContactInfoIcon src={data.icon} />
      <div>
        {data.value.map((item: any) => <div>{item}</div>)}
      </div>
    </STYLE.ContactInfo>
  );
}

export default ContactInfo;
