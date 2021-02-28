import { InputHTMLAttributes, useState } from 'react';

import * as S from '../styles/components/input';
import { IconType } from 'react-icons';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  password?: boolean;
  icon: IconType;
}

export default function Input({
  placeholder,
  icon: Icon,
  password,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);

  if (password) {
    return (
      <S.Container>
        <Icon
          size={15}
          fill={`${focus ? '#8464e5' : '#202024'}`}
          color="#121214"
          style={{ margin: '2px 3px' }}
        />
        <input
          style={{ paddingRight: '2.5em' }}
          className="password"
          type={!showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          onFocus={() => setFocus(prev => !prev)}
          onBlur={() => setFocus(prev => !prev)}
        />
        {!showPassword ? (
          <IoMdEye
            onClick={() => setShowPassword(prev => !prev)}
            className="eye-password"
            size={18}
          />
        ) : (
          <IoMdEyeOff
            onClick={() => setShowPassword(prev => !prev)}
            className="eye-password"
            size={18}
          />
        )}
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Icon
        size={20}
        fill={`${focus ? '#8464e5' : '#202024'}`}
        color="#121214"
      />
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => setFocus(prev => !prev)}
        onBlur={() => setFocus(prev => !prev)}
      />
    </S.Container>
  );
}
