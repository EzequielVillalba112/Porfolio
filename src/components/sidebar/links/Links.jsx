import { motion } from "framer-motion";

export default function Links() {
  const items = ["Inicio", "Servicio", "Portafolio", "Contacto", "Sobre mi"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div variants={variants} className="links">
      {items.map((item, i) => (
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={`#${item}`}
          key={i}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
