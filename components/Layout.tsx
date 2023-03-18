import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Props } from "next/script";


const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
