import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Montserrat } from "@next/font/google";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
});

export default function App({ Component, pageProps }: AppProps) {
  useSmoothScroll();
  return (
    <>
      
      <Layout className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
