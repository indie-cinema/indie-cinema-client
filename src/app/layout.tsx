import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;