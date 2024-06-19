import MovieBillboard from '@/components/main/MovieBillboard';
import MovieChartList from '@/components/main/MovieChartList';
import MovieList from '@/components/main/MovieList';
import { css } from '@styled-system/css';

const MainPage = () => {
  return (
    <div className={mainPageStyle}>
      <MovieBillboard />
      <MovieChartList />
      <MovieList category="마음이 달콤해지는 영화" />
      <MovieList category="심장이 벌렁하는 애니메이션" />
      <MovieList category="드럼드럼 드라마" />
    </div>
  );
};

export default MainPage;

const mainPageStyle = css({
  width: '100%',
  height: '100%',
});
