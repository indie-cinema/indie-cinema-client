import React from 'react';

import { useOverlayContext } from './contexts/OverlayContext';
import OverlayController from './OverlayController';
import type { OverlayControlRef, OverlayElement } from './types';

let elementId = 1;

type UseOverlayProps = {
  isExitOnUnmount?: boolean;
};

export const useOverlay = ({ isExitOnUnmount = true }: UseOverlayProps = {}) => {
  const { mount, unmount } = useOverlayContext();
  const overlayRef = React.useRef<OverlayControlRef | null>(null);
  const [id] = React.useState(() => String(elementId++));

  React.useEffect(() => {
    return () => {
      if (isExitOnUnmount) {
        unmount(id);
      }
    };
  }, [isExitOnUnmount, id, unmount]);

  return React.useMemo(
    () => ({
      open: (overlayElement: OverlayElement) => {
        mount(
          id,
          <OverlayController
            key={Date.now()}
            ref={overlayRef}
            overlayElement={overlayElement}
            onExit={() => {
              unmount(id);
            }}
          />,
        );
      },
      close: () => {
        overlayRef.current?.onClose();
      },
      exit: () => {
        unmount(id);
      },
    }),
    [mount, unmount, id],
  );
};
