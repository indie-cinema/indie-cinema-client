'use client';

import React from 'react';
import { css } from '@styled-system/css';

import Chip from '../base/Chip';

const MOVIE_FILTER_LIST = ['청춘', '슬픈', '공포', '웃긴'];

const MovieFilterBar = () => {
  const [filters, setFilters] = React.useState<string[]>([]);

  const handleFilterSelect = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters((prevFilters) => prevFilters.filter((prevFilter) => prevFilter !== filter));
    } else {
      setFilters((prevFilters) => [...prevFilters, filter]);
    }
  };

  return (
    <div className={movieFilterBarStyle}>
      {MOVIE_FILTER_LIST.map((filter, index) => (
        <Chip key={index} onClick={() => handleFilterSelect(filter)} isSelected={filters.includes(filter)}>
          {filter}
        </Chip>
      ))}
    </div>
  );
};

export default MovieFilterBar;

const movieFilterBarStyle = css({
  position: 'sticky',
  top: '64px',
  zIndex: 'global3',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '14px 64px',
  margin: '12px 0',
  background: 'background',
});
