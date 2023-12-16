import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/*Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration:0.5}}
        >
          EzVi Dev
        </motion.span>

        <ul className="social">
          <li>
            <a href="#">
              <img src="/facebook.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/github.png" alt="github" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/linkedin.png" alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
