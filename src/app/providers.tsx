import React from 'react';
import { OverlayProvider } from '@/libs/overlay/contexts/OverlayContext';

const Providers = ({ children }: React.PropsWithChildren) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default Providers;
