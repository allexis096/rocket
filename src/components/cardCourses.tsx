import * as S from '../styles/components/cardCourses';

interface ICardProps {
  image: React.ReactNode;
  text: string;
  name: string;
}

export default function CardCourses({ image, text, name }: ICardProps) {
  return (
    <S.Container name={name}>
      <S.Card>
        <S.Content>
          {image}
          <p>{text}</p>
        </S.Content>
      </S.Card>
    </S.Container>
  );
}
