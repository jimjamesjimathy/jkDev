import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import MobileNav from "./MobileNav";
import { navigation } from "../data";

export const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-lightRed font-bold uppercase"
          : ""
      }
            hover:text-red-900 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "z-50 bg-darkest border-b-2 border-darkest shadow-xl shadow-opaque-black";

  return (
    <nav className={`${navbarBackground} relative z-50 w-full md:fixed top-0 py-6`}>
      <div className="flex items-center justify-between w-5/6 mx-auto">
        <div className="flex items-center justify-between text-xl">
          <h4 className="font-medium text-green">
            JK
            <span className="mx-2 text-red">||</span>
            DEV
          </h4>
        </div>
        {isDesktop ? (
          <ul className={"flex space-x-8 font-semibold text-md"}>
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  page={item.name}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            ))}
          </ul>
        ) : (
          <MobileNav
            isDesktop={isDesktop}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
