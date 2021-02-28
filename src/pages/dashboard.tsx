import Discover from '../../public/discover.svg';
import GoStack from '../../public/goStack.svg';

import CardCourses from '../components/cardCourses';
import Header from '../components/header';

import * as S from '../styles/pages/dashboard';

export default function Dashboard() {
  return (
    <>
      <Header />
      <S.Courses>
        <CardCourses
          name="discover"
          image={<Discover />}
          text="Comunidade e conteúdo gratuito que te levarão para o próximo nível em programação"
        />
        <CardCourses
          name="gostack"
          image={<GoStack />}
          text="Treinamento imersivo nas tecnologias mais modernas de desenvolvimento web e mobile"
        />
      </S.Courses>
    </>
  );
}
