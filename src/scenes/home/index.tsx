import useMediaQuery from "../../hooks/useMediaQuery";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPageIndex } from "../../shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: selectedPageIndex) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  //useMediaQuery
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="bg-gray-20 py-20">
       {/* HEADER AND IMAGE HOME PAGE */}
      <motion.div
        className="mx-auto w-5/6 items-center md:flex md:h-5/6"
        onViewportEnter={()=> setSelectedPage(selectedPageIndex.Home)}
      >
         {/* HEADER */}
        <div className="z-10 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* BUTTONS CONTACT US */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="btn-primary hover:text-white"
              onClick={() => setSelectedPage(selectedPageIndex.ContactUs)}
              href={`#${selectedPageIndex.ContactUs}`}
            >
              Join Me
            </AnchorLink>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(selectedPageIndex.ContactUs)}
              href={`#${selectedPageIndex.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
         {/* IMAGE HOME PAGE */}
        <div className="flex basis-3/5 md:z-10 md:ml-40 md:mt-16">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between">
              <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorFortune} alt="sponsor-fortune" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
