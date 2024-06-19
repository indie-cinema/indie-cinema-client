import { css } from '@styled-system/css';

export const scrollHiddenStyle = css({
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
