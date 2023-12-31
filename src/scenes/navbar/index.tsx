import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { navbarPagesType, selectedPageIndex } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {navbarPages} from "../../utils/navbarPagesData";

type Props = {
  isTopOfPage: boolean;
  selectedPage: selectedPageIndex;
  setSelectedPage: (value: selectedPageIndex) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  // Hooks
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // Variables Class
  const flexBetween = "flex items-center justify-between";
  const navbarBackgroundColor = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  //useMediaQuery
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`${navbarBackgroundColor} ${flexBetween} fixed top-0 z-50 w-full py-6 transition-all duration-200`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" draggable="false"/>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                 {/* NAVBAR PAGES */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {navbarPages.map((page: navbarPagesType) => {
                    const {id, title} = page;
                    return (
                      <Link
                        key={id}
                        page={title}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    );
                  })}
                </div>
                 {/* BUTTONS CONTACT US */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <AnchorLink
                    className="btn-primary hover:text-white"
                    onClick={() => setSelectedPage(selectedPageIndex.ContactUs)}
                    href={`#${selectedPageIndex.ContactUs}`}
                  >
                    Become a Member
                  </AnchorLink>
                </div>
              </div>
            ) : (
              <div
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-50 h-full w-[80vw] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col items-start gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
