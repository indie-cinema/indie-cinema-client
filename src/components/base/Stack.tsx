import React from 'react';
import { type HTMLTag } from '@/types/react';
import { cx } from '@styled-system/css';
import { stack } from '@styled-system/patterns';

export type StackProps = {
  direction?: React.CSSProperties['flexDirection'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  gap?: React.CSSProperties['gap'];
  tag?: HTMLTag;
} & React.HTMLAttributes<HTMLDivElement>;

const Stack = ({
  children,
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  gap = 24,
  tag: Tag = 'div',
  className,
}: React.PropsWithChildren<StackProps>) => {
  return (
    <Tag
      className={cx(stack({ align, justify }), className)}
      style={{ gap: typeof gap === 'number' ? `${gap}px` : gap, flexDirection: direction }}
    >
      {children}
    </Tag>
  );
};

export default Stack;
