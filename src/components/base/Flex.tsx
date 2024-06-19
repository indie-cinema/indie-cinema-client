import React from 'react';
import { type HTMLTag } from '@/types/react';
import { cx } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

type FlexProps = {
  direction?: React.CSSProperties['flexDirection'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  tag?: HTMLTag;
} & React.HTMLAttributes<HTMLDivElement>;

const Flex = ({
  children,
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  tag: Tag = 'div',
  className,
}: React.PropsWithChildren<FlexProps>) => {
  return <Tag className={cx(flex({ direction, align, justify }), className)}>{children}</Tag>;
};

export default Flex;
