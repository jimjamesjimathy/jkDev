import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen transition-all duration-700 bg-white dark:bg-tertiary">
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
