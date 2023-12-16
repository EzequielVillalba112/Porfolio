import { motion } from "framer-motion";

const variant = {
  visible: {
    opacity: 1,
    x: 100,
    transition: { staggerChildren: 0.2},
  },
  hidden: { opacity: 0 },
};

const items = ["item1", "item2", "item3", "item4"];

export default function Test() {
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variant}>
        {items.map((item, i) => (
          <motion.li variants={variant} key={i}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
