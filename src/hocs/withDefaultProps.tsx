import React from 'react';

const withDefaultProps = <Props extends React.PropsWithChildren<unknown>>(
  Component: React.ComponentType<Props>,
  defaultProps: Partial<Props>,
) => {
  const WrappedComponent = (props: Partial<Props>) => {
    const mergedProps = { ...defaultProps, ...props } as Props;

    return <Component {...mergedProps} />;
  };
  return WrappedComponent;
};

export default withDefaultProps;
