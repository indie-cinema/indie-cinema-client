import React from 'react';
import Portal from '@/components/base/Portal';
import { scrollHiddenStyle } from '@/styles/styles';
import { css, cx } from '@styled-system/css';

type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
} & React.HTMLAttributes<HTMLDivElement>;

const Modal = ({ children, isOpen, onClose, className, ...props }: React.PropsWithChildren<ModalProps>) => {
  const onClickOutside: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <Portal isOpen={isOpen}>
      <div className={dimBackgroundStyle} onClick={onClickOutside}>
        <div className={cx(modalStyle, scrollHiddenStyle)} {...props}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

const dimBackgroundStyle = css({
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  zIndex: 'global3',
  background: 'rgba(0, 0, 0, 0.6)',
});

const modalStyle = css({
  width: '380px',
  minHeight: '200px',
  padding: '24px',
  overflow: 'auto',
  background: 'background',
});
