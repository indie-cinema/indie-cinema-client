import React from 'react';

import type { OverlayControlRef, OverlayElement } from './types';

type OverlayControllerProps = {
  overlayElement: OverlayElement;
  onExit: VoidFunction;
};

const OverlayController = React.forwardRef<OverlayControlRef, OverlayControllerProps>(function OverlayController(
  { overlayElement: OverlayElement, onExit },
  ref,
) {
  const [isOpenOverlay, setIsOpenOverlay] = React.useState(false);

  const handleOverlayClose = React.useCallback(() => setIsOpenOverlay(false), []);

  React.useImperativeHandle(
    ref,
    () => {
      return { onClose: handleOverlayClose };
    },
    [handleOverlayClose],
  );

  React.useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpenOverlay(true);
    });
  }, []);

  return <OverlayElement isOpen={isOpenOverlay} onClose={handleOverlayClose} exit={onExit} />;
});

export default OverlayController;
