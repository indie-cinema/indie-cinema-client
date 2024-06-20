'use client';

import React from 'react';

type OverlayContextState = {
  mount: (id: string, element: React.ReactNode) => void;
  unmount: (id: string) => void;
};

const OverlayContext = React.createContext<OverlayContextState | null>(null);

export const OverlayProvider = ({ children }: React.PropsWithChildren) => {
  const [overlayById, setOverlayById] = React.useState<Map<string, React.ReactNode>>(new Map());

  const mount = React.useCallback((id: string, element: React.ReactNode) => {
    setOverlayById((prevOverlayById) => {
      const cloned = new Map(prevOverlayById);
      cloned.set(id, element);
      return cloned;
    });
  }, []);

  const unmount = React.useCallback((id: string) => {
    setOverlayById((prevOverlayById) => {
      const cloned = new Map(prevOverlayById);
      cloned.delete(id);
      return cloned;
    });
  }, []);

  const overlayContext = React.useMemo(() => ({ mount, unmount }), [mount, unmount]);

  return (
    <OverlayContext.Provider value={overlayContext}>
      {children}
      {Array.from(overlayById.keys()).map((id) => (
        <React.Fragment key={id}>{overlayById.get(id)}</React.Fragment>
      ))}
    </OverlayContext.Provider>
  );
};

export const useOverlayContext = () => {
  const context = React.useContext(OverlayContext);

  if (context == null) {
    throw new Error('useOverlay is only available within OverlayProvider.');
  }
  return context;
};

export default OverlayContext;
