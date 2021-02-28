import Head from 'next/head';
import { FiMail } from 'react-icons/fi';
import { FaLock, FaGithub } from 'react-icons/fa';

import * as S from '../styles/pages';

import Logo from '../../public/logo.svg';

import Input from '../components/input';

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Login | localhost</title>
      </Head>
      <S.Left>
        <Logo />
        <h1>Faça seu login na plataforma</h1>
      </S.Left>
      <S.Right>
        <S.Form>
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FaLock} placeholder="Senha" password />
          <a href="/">Esqueci minha senha</a>
          <button type="button">Entrar</button>
          <span>
            Não tem uma conta? <a href="/">Registre-se</a>
          </span>
          <S.Divisor>
            <div />
            <div />
          </S.Divisor>
          <S.Github>
            <span>Ou entre com</span>
            <button type="button">
              <FaGithub size={20} />
              GITHUB
            </button>
          </S.Github>
        </S.Form>
      </S.Right>
    </S.Container>
  );
}
