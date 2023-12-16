import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2.5,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapperH">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <motion.h2 variants={textVariants}>EZEQUIEL VILLALBA.</motion.h2>
          <motion.h1 variants={textVariants}>
            Desarrollador web y Analista de sistemas
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Descargar CV</motion.button>
            <motion.button variants={textVariants}>Conctame</motion.button>
          </motion.div>

          <motion.img
            variants={textVariants}
            src="./scroll.png"
            alt="scroll.png"
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Desarrollador web
      </motion.div>
    </div>
  );
}
