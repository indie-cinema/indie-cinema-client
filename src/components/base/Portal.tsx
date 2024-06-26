import React from 'react';
import { useDidMount } from '@/hooks/useDidMount';
import { createPortal } from 'react-dom';

type PortalProps = {
  isOpen: boolean;
};

const Portal = ({ isOpen, children }: React.PropsWithChildren<PortalProps>) => {
  const [element, setElement] = React.useState<Element | null>(null);

  useDidMount(() => {
    if (document) {
      setElement(document.body);
    }
  });

  if (!element) {
    return null;
  }

  return createPortal(isOpen && children, element);
};

export default Portal;
