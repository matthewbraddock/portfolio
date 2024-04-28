import "./navbar.scss";
import { motion } from "framer-motion";
import { Sidebar } from "./sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Braddock&apos;s Portfolio
        </motion.span>
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/matthewsbraddock/"
          >
            <img src="/linkedin.png" alt="LinkedIn Website Link" />
          </a>
        </div>
      </div>
    </div>
  );
};
