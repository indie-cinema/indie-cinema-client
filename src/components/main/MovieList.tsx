'use client';

import useOpenMovieDetailModal from '@/hooks/useOpenMovieDetailModal';
import { scrollHiddenStyle } from '@/styles/styles';
import { css, cx } from '@styled-system/css';

import Text from '../base/Text';
import VStack from '../base/VStack';
import MovieCard from './MovieCard';

type MovieListProps = {
  category: string;
};

const MovieList = ({ category }: MovieListProps) => {
  const { openMovieDetailModal } = useOpenMovieDetailModal();

  return (
    <VStack gap={12} className={css({ padding: '0 64px', marginBottom: '48px' })}>
      <Text textStyle="h4">{category}</Text>
      <ul className={cx(movieListStyle, scrollHiddenStyle)}>
        <MovieCard onClick={openMovieDetailModal} />
        <MovieCard onClick={openMovieDetailModal} />
        <MovieCard onClick={openMovieDetailModal} />
        <MovieCard onClick={openMovieDetailModal} />
        <MovieCard onClick={openMovieDetailModal} />
        <MovieCard onClick={openMovieDetailModal} />
        <MovieCard onClick={openMovieDetailModal} />
        <MovieCard onClick={openMovieDetailModal} />
      </ul>
    </VStack>
  );
};

export default MovieList;

const movieListStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  overflowY: 'auto',
});
