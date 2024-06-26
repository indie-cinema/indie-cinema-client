import { css } from '@styled-system/css';

import Button from '../base/Button';
import Stack from '../base/Stack';
import Text from '../base/Text';
import Modal from '../modal/Modal';
import ModalCloseButton from '../modal/ModalCloseButton';
import ModalHeader from '../modal/ModalHeader';

type MovieDetailModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

const MovieDetailModal = ({ isOpen, onClose }: MovieDetailModalProps) => {
  return (
    <Modal style={{ width: '750px', height: '355px' }} isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <div className={movieDetailModalBodyStyle}>
        <Stack align="center">
          <img
            src="https://occ-0-2218-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABazELc84U0sOwP9ENlgNRRFbZkFeZuTcwH-29oAkTijFncO_zKaqDLDIzq6LjvLtNmVu6mcDuuPAsmmw3ZT-sH85RoKQ5ZZ5eBU.webp?r=9cb"
            alt="Movie"
          />
          <Stack direction="column">
            <Text textStyle="h2">청춘기록</Text>
            <Text textStyle="p1">박보검과 박소담이 주연을 맡고 안길호 감독이 연출한 로맨스 드라마.</Text>
            <Stack gap={4} direction="column">
              <Text textStyle="p3">감독: 김휘겸</Text>
              <Text textStyle="p3">주요 출연진: 이희성, 배유정, 하현재, 윤동현</Text>
            </Stack>
          </Stack>
        </Stack>
        <Button styleType="primary" size="large" style={{ width: '100%' }}>
          재생
        </Button>
      </div>
    </Modal>
  );
};

export default MovieDetailModal;

const movieDetailModalBodyStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(100% - 24px)',
});
