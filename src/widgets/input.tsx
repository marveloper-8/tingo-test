import { FC } from 'react';
import * as STYLE from 'styles/widgets'

const InputWidget: FC<any> = ({data, setData}) => {
  return (
    <STYLE.InputWrapper>
      {data.icon && <STYLE.InputIcon src={data.icon} />}
      {data.type === 'textarea' ? (
        <STYLE.TextArea
          placeholder={data.placeholder}
          value={data.value}
          onChange={(e) => setData({
            ...data,
            value: e.target.value
          })}
        />
      ) : (
        <STYLE.Input
          placeholder={data.placeholder}
          value={data.value}
          type={data.type}
          onChange={(e) => setData({
            ...data,
            value: e.target.value
          })}
        />
      )}
    </STYLE.InputWrapper>
  );
}

export default InputWidget;
