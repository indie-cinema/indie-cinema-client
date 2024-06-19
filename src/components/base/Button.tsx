import { cva, cx } from '@styled-system/css';

type ButtonStyleType = 'primary' | 'ghost' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  size?: ButtonSize;
  styleType?: ButtonStyleType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  leftIcon,
  rightIcon,
  size = 'medium',
  styleType = 'primary',
  type = 'button',
  onClick,
  className,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cx(buttonStyle({ size, styleType }), className)} type={type} onClick={onClick} {...props}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;

const buttonStyle = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',

    _hover: {
      cursor: 'pointer',
    },
  },
  variants: {
    size: {
      small: {
        textStyle: 'body2',
        padding: '10px 16px',
      },
      medium: {
        textStyle: 'body1',
        padding: '12px 16px',
      },
      large: {
        textStyle: 'body1',
        padding: '15px 16px',
      },
    },
    styleType: {
      ghost: {
        color: 'black',
        backgroundColor: 'white',

        _hover: {
          backgroundColor: 'gray100',
        },
      },
      primary: {
        color: 'white',
        backgroundColor: 'primary',

        _hover: {
          backgroundColor: 'primaryHover',
        },
      },
      secondary: {
        backgroundColor: 'white',

        _hover: {
          backgroundColor: 'gray50',
        },
      },
    },
  },
});
