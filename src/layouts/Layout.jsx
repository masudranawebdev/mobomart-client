import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
