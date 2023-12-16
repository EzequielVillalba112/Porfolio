import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import TogglesButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
      <motion.div variants={variants} className="bg">
        <Links />
      </motion.div>
      <TogglesButton setOpen={setOpen} />
    </motion.div>
  );
}
