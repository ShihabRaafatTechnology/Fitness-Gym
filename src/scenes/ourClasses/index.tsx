import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { ourClassesType, selectedPageIndex } from "../../shared/types";
import { classes } from "../../utils/ourClassessData";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: selectedPageIndex) => void;
};



const OurClasses = ({ setSelectedPage }: Props) => {
  // HOOKS
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  // USE DRAGGABLE SCROLL
  const { events } = useDraggable(ref);

  
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(selectedPageIndex.OurClasses)}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mx-auto w-5/6"
      >
        <div className="md:w-3/5">
          <HText>OUR CLASSES</HText>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden md:overflow-hidden" {...events} ref={ref}>
        <ul className="select-chevron w-[2860px]">
          {classes.map((items: ourClassesType, index) => {
            const { name, description, image } = items;
            return (
              <Class
                key={index}
                name={name}
                description={description}
                image={image}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
