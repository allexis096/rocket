import { AiFillPlayCircle } from 'react-icons/ai';
import Header from '../components/header';

import * as S from '../styles/pages/dashboard';

export default function Dashboard() {
  return (
    <>
      <Header />
      <S.SectionContainer>
        <S.CardOne>
          <div>
            <h2>Olá, Allexis</h2>
            <p>
              Seja bem vindo de volta. Que tal continuar assistindo sua aula de
              onde parou?
            </p>
          </div>
          <span>#NeverStopLearning</span>
        </S.CardOne>
        <S.CardTwo>
          <main>
            <h3>Tipando objetos e vetores</h3>
            <span>GoStack 2020 / TypeScript</span>
          </main>
          <div>
            CONTINUAR ASSISTINDO
            <AiFillPlayCircle
              size={36}
              color="rgb(130, 87, 230)"
              style={{ marginLeft: 10 }}
            />
          </div>
        </S.CardTwo>
      </S.SectionContainer>
    </>
  );
}
