import { GetServerSideProps } from 'next';
import Discover from '../../public/discover.svg';
import GoStack from '../../public/goStack.svg';

import CardCourses from '../components/cardCourses';
import Header from '../components/header';

import * as S from '../styles/pages/dashboard';

type Course = {
  id: number;
  name: string;
  text: string;
};

type CourseProps = {
  course: Course[];
};

export default function Dashboard({ course }: CourseProps) {
  return (
    <>
      <Header />
      <S.Courses>
        {course.map(courses => (
          <CardCourses
            key={courses.id}
            name={courses.name}
            image={
              (courses.name === 'discover' && <Discover />) ||
              (courses.name === 'gostack' && <GoStack />)
            }
            text={courses.text}
          />
        ))}
      </S.Courses>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/courses`);
  const course = await res.json();

  return {
    props: {
      course,
    },
  };
};
