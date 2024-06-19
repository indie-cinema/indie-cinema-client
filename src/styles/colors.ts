export type Colors = typeof colors;
export type ColorKeys = keyof typeof colors;

export const colors = {
  black: { value: '#1D1D1F' },
  white: { value: '#FFFFFF' },
  red: { value: '#F44336' },
  yellow: { value: '#FEE500' },
  primary: { value: '#0066FF' },
  primaryHover: { value: '#005CE6' },
  background: { value: '#141414' },
  gray50: { value: '#FAFAFB' },
  gray100: { value: '#F8F8F9' },
  gray200: { value: '#EEF0F2' },
  gray300: { value: '#DDDEE3' },
  gray400: { value: '#BBBCC2' },
  gray500: { value: '#9497A0' },
  gray600: { value: '#70737C' },
  gray700: { value: '#595B66' },
  gray750: { value: '#414550' },
  gray800: { value: '#373B44' },
  gray850: { value: '#2B2E36' },
  gray900: { value: '#21242C' },
} as const;
