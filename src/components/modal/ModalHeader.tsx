import React from 'react';
import { css } from '@styled-system/css';

const ModalHeader = ({ children }: React.PropsWithChildren) => {
  return <header className={modalHeaderStyle}>{children}</header>;
};

export default ModalHeader;

const modalHeaderStyle = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '24px',
  flexShrink: '0',
});
