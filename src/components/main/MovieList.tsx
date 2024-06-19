import { scrollHiddenStyle } from '@/styles/styles';
import { css, cx } from '@styled-system/css';

import Text from '../base/Text';
import VStack from '../base/VStack';
import MovieCard from './MovieCard';

type MovieListProps = {
  category: string;
};

const MovieList = ({ category }: MovieListProps) => {
  return (
    <VStack gap={12} className={css({ padding: '0 64px', marginBottom: '48px' })}>
      <Text textStyle="h4">{category}</Text>
      <ul className={cx(movieListStyle, scrollHiddenStyle)}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
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
