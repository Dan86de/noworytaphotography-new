import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Props } from "next/script";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
});

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className={`${montserrat.variable} font-sans`}>{children}</main>
    <Footer />
  </>
);

export default Layout;
