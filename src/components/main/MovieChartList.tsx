import { scrollHiddenStyle } from '@/styles/styles';
import { css, cx } from '@styled-system/css';

import Text from '../base/Text';
import VStack from '../base/VStack';

const MovieChartList = () => {
  return (
    <VStack gap={12} className={css({ padding: '0 64px', marginBottom: '48px' })}>
      <Text textStyle="h4">인기 영화</Text>
      <div className={cx(movieChartListStyle, scrollHiddenStyle)}>
        <MovieChart />
        <MovieChart />
        <MovieChart />
        <MovieChart />
        <MovieChart />
        <MovieChart />
        <MovieChart />
      </div>
    </VStack>
  );
};

export default MovieChartList;

const movieChartListStyle = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  width: '100%',
  overflowY: 'auto',
});

const MovieChart = () => {
  return <div className={movieChartStyle}></div>;
};

const movieChartStyle = css({
  position: 'relative',
  flexShrink: '0',
  height: '250px',
  width: '200px',
  backgroundImage:
    'url(https://occ-0-2218-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABazELc84U0sOwP9ENlgNRRFbZkFeZuTcwH-29oAkTijFncO_zKaqDLDIzq6LjvLtNmVu6mcDuuPAsmmw3ZT-sH85RoKQ5ZZ5eBU.webp?r=9cb)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  transition: ' all 0.1s ease-in-out 0s',

  _hover: {
    cursor: 'pointer',
    transform: 'translateY(-8px)',
  },
});
