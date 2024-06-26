import React from 'react';

export const useDidMount = (callback: VoidFunction) => {
  const didMountRef = React.useRef(false);

  React.useEffect(() => {
    if (didMountRef.current) {
      return;
    }
    didMountRef.current = true;

    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
