import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPageIndex } from "../../shared/types";


type Props = {
  page: string;
  selectedPage: selectedPageIndex;
  setSelectedPage: (value: selectedPageIndex) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const toLowerPage = page.toLowerCase().replace(/ /g, "") as selectedPageIndex;

  return (
    <AnchorLink
      className={`${
        selectedPage === toLowerPage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${toLowerPage}`}
      onClick={() => setSelectedPage(toLowerPage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
