import Link from 'next/link';
import { css } from '@styled-system/css';

import HStack from './HStack';
import Logo from './Logo';
import Text from './Text';

const Header = () => {
  return (
    <header className={headerStyle}>
      <Link href="/">
        <Logo />
      </Link>
      <HStack tag="ul" gap={18}>
        <li>
          <Link href="/">
            <Text textStyle="body1">로그인</Text>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Text textStyle="body1">회원가입</Text>
          </Link>
        </li>
      </HStack>
    </header>
  );
};

export default Header;

const headerStyle = css({
  position: 'sticky',
  top: '0',
  zIndex: 'global3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '64px',
  padding: '0 64px',
  background: 'background',
});
