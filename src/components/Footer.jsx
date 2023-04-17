import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer>
      <Layout className="px-32 sm:px-4 h-[10vh] text-black-200 dark:text-white flex xmd:flex-col items-center justify-between">
        <span className="flex-1">
          {new Date().getFullYear()} &copy; All Right Reserved
        </span>
        <div className="flex items-center justify-end flex-1">
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
