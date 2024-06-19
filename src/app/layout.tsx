import React from 'react';
import Header from '@/components/base/Header';
import Layout from '@/components/base/Layout';
import { css } from '@styled-system/css';

import './globals.css';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html className={htmlStyle} lang="kr">
      <body>
        <Layout header={<Header />}>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;

const htmlStyle = css({
  background: 'background',
});
