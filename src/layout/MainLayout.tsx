import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

// const MainLayoutRoot = experimentalStyled('div')(({ theme }: any) => ({
//   backgroundColor: theme.palette.background.default,
//   height: '100%',
//   paddingTop: 64,
// }));

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children || <Outlet />}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
