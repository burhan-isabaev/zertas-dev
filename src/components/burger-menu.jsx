import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";
function BurgerMenu({ onClick }) {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.6,
      }}
    >
      <motion.button
        initial={false}
        className="relative h-10 w-10 rounded-full"
        onClick={() => {
          setActive((prev) => !prev);
          onClick();
        }}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          className="absolute h-[2px] w-5 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "35%", "35%"],
            },
          }}
        />
        <motion.span
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          className="absolute h-[2px] w-5 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
          className="absolute h-[2px] w-5 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["51%", "35%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

export default BurgerMenu;
