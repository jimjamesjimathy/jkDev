import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full text-lg px-32 text-black-200 dark:text-white">
      <Layout className="p-0 flex items-center justify-between h-[10vh]">
        <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
        <div className="flex items-center">
          Built with <span className="text-fourth text-2xl px-1">&#9825;</span>
          by&nbsp;{" "}
          <Link
            href="/"
            className="underline underline-offset-[5px]"
            target={"_blank"}
          >
            James Kirkwood
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
