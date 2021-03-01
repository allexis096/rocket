import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

import Discover from '../../public/discover.svg';
import GoStack from '../../public/goStack.svg';

import CardCourses from '../components/cardCourses';
import Header from '../components/header';
import Loading from '../components/Loading/dashboard';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    !course ? setLoading(true) : setLoading(false);
  }, [course]);
  return (
    <>
      <Header />
      <S.Courses>
        {loading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </S.Courses>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/courses`);
  const course = await res.json();

  if (!course) {
    console.log('OW BURRAO, LIGA O SERVIDOR AI');
  }

  return {
    props: {
      course,
    },
  };
};
