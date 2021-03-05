import { useEffect, useState } from 'react';

import Discover from '../../public/discover.svg';
import GoStack from '../../public/goStack.svg';

import CardCourses from '../components/cardCourses';
import Header from '../components/header';
import Loading from '../components/Loading/dashboard';

import * as S from '../styles/pages/dashboard';

type CourseProps = {
  id: number;
  name: string;
  text: string;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<CourseProps[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/courses`
      ).then(res => res.json());

      setCourse(res);
      setLoading(false);
    })();
  }, []);

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
