import React from 'react';
import { css } from '@styled-system/css';

type LayoutProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const Layout = ({ children, header, footer }: React.PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {header && header}
      <div className={layoutStyle}>{children}</div>
      {footer && footer}
    </>
  );
};

export default Layout;

const layoutStyle = css({
  display: 'flex',
  width: '100vw',
  minHeight: '100vh',
  height: '100%',
  background: 'background',
});
