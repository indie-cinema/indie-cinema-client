type SpacerProps = {
  width?: string | number;
  height?: string | number;
};

const Spacer = ({ width, height }: SpacerProps) => {
  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    />
  );
};

export default Spacer;
