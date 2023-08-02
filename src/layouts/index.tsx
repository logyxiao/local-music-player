import { memo } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = memo<LayoutProps>(({ children }) => {
  return <div>{children}</div>;
});

export default Layout;
