export type OverlayElement = (props: { isOpen: boolean; onClose: VoidFunction; exit: VoidFunction }) => JSX.Element;

export type OverlayControlRef = {
  onClose: VoidFunction;
};
