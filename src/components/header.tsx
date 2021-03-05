import { useState } from 'react';
import Link from 'next/link';

import Logo from '../../public/logo.svg';
import {
  IoMdSearch,
  IoMdPersonAdd,
  IoMdNotifications,
  IoMdPerson,
  IoMdLogOut,
} from 'react-icons/io';
import { ImBooks } from 'react-icons/im';
import { MdLiveHelp, MdHistory, MdUpdate } from 'react-icons/md';
import { GoStar } from 'react-icons/go';

import * as S from '../styles/components/header';
import { IconType } from 'react-icons';

type ModalInfoProps = {
  Icon: IconType;
  info: string;
};

export default function Header() {
  const [selected, setSelected] = useState('Home');
  const [openModal, setOpenModal] = useState(false);

  function handleProfile() {
    setOpenModal(prev => !prev);
  }

  const modalInfo: ModalInfoProps[] = [
    {
      Icon: IoMdPerson,
      info: 'Meu Perfil',
    },
    {
      Icon: ImBooks,
      info: 'Meus dados',
    },
    {
      Icon: MdLiveHelp,
      info: 'Central de ajuda',
    },
    {
      Icon: MdUpdate,
      info: 'ChangeLog',
    },
    {
      Icon: GoStar,
      info: 'GoStack',
    },
    {
      Icon: MdHistory,
      info: 'Histórico',
    },
    {
      Icon: IoMdLogOut,
      info: 'Sair da Plataforma',
    },
  ];

  return (
    <S.Container
      onClick={() => {
        if (openModal) setOpenModal(false);
      }}
    >
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
          onClick={handleProfile}
        />
        <S.Notification />
      </S.NavGroup>
      {openModal && (
        <S.Modal>
          {modalInfo.map(({ Icon, info }) => (
            <S.ButtonAction key={info}>
              <Icon size={20} color="rgb(130, 87, 229)" />
              <span>{info}</span>
            </S.ButtonAction>
          ))}
        </S.Modal>
      )}
    </S.Container>
  );
}
