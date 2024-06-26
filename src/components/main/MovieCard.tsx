import React from 'react';
import { css } from '@styled-system/css';

type MovieCardProps = React.HTMLAttributes<HTMLDivElement>;

const MovieCard = ({ ...props }: MovieCardProps) => {
  return <div className={movieCardStyle} {...props}></div>;
};

export default MovieCard;

const movieCardStyle = css({
  position: 'relative',
  flexShrink: '0',
  height: '120px',
  width: '230px',
  backgroundImage:
    'url(https://occ-0-2218-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABazELc84U0sOwP9ENlgNRRFbZkFeZuTcwH-29oAkTijFncO_zKaqDLDIzq6LjvLtNmVu6mcDuuPAsmmw3ZT-sH85RoKQ5ZZ5eBU.webp?r=9cb)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  transition: ' all 0.1s ease-in-out 0s',

  _hover: {
    cursor: 'pointer',
    transform: 'translateY(-8px)',
  },
});
