import { IconPlayFill } from '@seed-design/icon';
import { css } from '@styled-system/css';

import Button from '../base/Button';
import HStack from '../base/HStack';
import Text from '../base/Text';
import VStack from '../base/VStack';

const MovieBillboard = () => {
  return (
    <div className={movieBillboardStyle}>
      <VStack gap={24}>
        <VStack gap={8}>
          <Text textStyle="h1">타이틀</Text>
          <Text textStyle="p1">상세 설명</Text>
        </VStack>
        <HStack gap={8}>
          <Button leftIcon={<IconPlayFill width={14} height={14} />}>재생</Button>
          <Button styleType="secondary">자세히 보기</Button>
        </HStack>
      </VStack>
    </div>
  );
};

export default MovieBillboard;

const movieBillboardStyle = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '500px',
  padding: '0 64px',
  marginBottom: '64px',
  backgroundImage: 'url(/images/movie-billboard-background.webp)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  opacity: '1',
});
