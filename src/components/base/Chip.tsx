import { cva } from '@styled-system/css';

type ChipProps = {
  isSelected: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

const Chip = ({ children, isSelected, ...props }: React.PropsWithChildren<ChipProps>) => {
  return (
    <span className={chipStyle({ isSelected })} {...props}>
      {children}
    </span>
  );
};

export default Chip;

const chipStyle = cva({
  base: {
    textStyle: 'p1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36px',
    padding: '0 14px',
    borderRadius: '100px',
    background: 'white',

    _hover: {
      cursor: 'pointer',
    },
  },
  variants: {
    isSelected: {
      true: {
        color: 'white',
        background: 'primary',
        fontWeight: '700',
      },
    },
  },
});
