import { useState } from 'react';
import Link from 'next/link';

import Logo from '../../public/logo.svg';
import { IoMdSearch, IoMdPersonAdd, IoMdNotifications } from 'react-icons/io';

import * as S from '../styles/components/header';

export default function Header() {
  const [selected, setSelected] = useState('Home');

  return (
    <S.Container>
      <Logo />
      <div>
        <Link href="/dashboard">
          <S.SelectedButton
            aria-label="Home"
            selected={selected}
            onClick={() => setSelected('Home')}
          >
            Home
          </S.SelectedButton>
        </Link>
        <Link href="/dashboard">
          <S.SelectedButton
            aria-label="Profile"
            selected={selected}
            onClick={() => setSelected('Profile')}
          >
            Perfil
          </S.SelectedButton>
        </Link>
        <Link href="/dashboard">
          <S.SelectedButton
            aria-label="Discover"
            selected={selected}
            onClick={() => setSelected('Discover')}
          >
            Discover
          </S.SelectedButton>
        </Link>
      </div>
      <S.NavGroup>
        <S.Buttons>
          <IoMdSearch size={23} />
        </S.Buttons>
        <S.Buttons>
          <IoMdPersonAdd size={23} />
        </S.Buttons>
        <S.Buttons>
          <IoMdNotifications size={23} />
        </S.Buttons>
        <img
          src="https://xesque.rocketseat.dev/users/avatar/profile-39282dd1-7c10-4cd1-8c34-12f1b6b43161.jpg"
          alt="Avatar"
        />
      </S.NavGroup>
    </S.Container>
  );
}
