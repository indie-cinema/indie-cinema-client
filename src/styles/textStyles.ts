export type TextStyles = typeof textStyles;
export type TextStyleKeys = keyof typeof textStyles;

export const textStyles = {
  h1: {
    value: {
      fontSize: '32px',
      fontWeight: '800',
      lineHeight: '140%',
    },
  },
  h2: {
    value: {
      fontSize: '28px',
      fontWeight: '700',
      lineHeight: '140%',
    },
  },
  h3: {
    value: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '140%',
    },
  },
  h4: {
    value: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '140%',
    },
  },
  h5: {
    value: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '140%',
    },
  },
  body1: {
    value: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '140%',
    },
  },
  body2: {
    value: {
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '140%',
    },
  },
  body3: {
    value: {
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '140%',
    },
  },
  p1: {
    value: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '140%',
    },
  },
  p2: {
    value: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '140%',
    },
  },
  p3: {
    value: {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '140%',
    },
  },
} as const;
