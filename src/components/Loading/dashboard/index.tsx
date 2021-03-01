import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import * as S from './styles';

export default function Loading() {
  return (
    <S.Container>
      <SkeletonTheme color="rgb(41, 41, 46)" highlightColor="rgb(32, 32, 36)">
        <S.SkeletonContent>
          <Skeleton circle height={150} width={150} />
          <Skeleton height={20} width={140} />

          <Skeleton height={16} width={300} />
          <Skeleton height={16} width={300} />
          <Skeleton height={16} width={300} />
        </S.SkeletonContent>

        <S.SkeletonContent>
          <Skeleton circle height={150} width={150} />
          <Skeleton height={20} width={140} />

          <Skeleton height={16} width={300} />
          <Skeleton height={16} width={300} />
          <Skeleton height={16} width={300} />
        </S.SkeletonContent>
      </SkeletonTheme>
    </S.Container>
  );
}
