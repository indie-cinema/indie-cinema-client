import { IconCloseFill } from '@seed-design/icon';
import { css } from '@styled-system/css';

type ModalCloseButtonProps = {
  onClose: VoidFunction;
};

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <IconCloseFill
      className={css({ position: 'absolute', right: '0', top: '0', color: 'white' })}
      onClick={onClose}
      width={24}
      height={24}
      cursor="pointer"
    />
  );
};

export default ModalCloseButton;
