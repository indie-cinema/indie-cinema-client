import React from 'react';
import { type ColorKeys, colors } from '@/styles/colors';
import { type TextStyleKeys, textStyles } from '@/styles/textStyles';

type TextProps = {
  textStyle?: TextStyleKeys;
  color?: ColorKeys;
  tag?: 'p' | 'span';
} & React.HTMLAttributes<HTMLSpanElement>;

const Text = ({
  children,
  textStyle = 'p1',
  color = 'white',
  tag: Tag = 'span',
  ...props
}: React.PropsWithChildren<TextProps>) => {
  return (
    <Tag style={{ ...textStyles[textStyle].value, color: colors[color].value }} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
