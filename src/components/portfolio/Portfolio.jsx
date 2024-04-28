import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Weather App",
    img: "/weather_app.png",
    desc: "I developed this weather app as my first solo project using React, focusing on real-time updates and seamless API integration. It was a practical introduction to building and consuming my own front-end interface.",
  },
  {
    id: 2,
    title: "Virtual Range Insight API Endpoint",
    img: "/virtual_cloud.png",
    desc: "For this proof of concept, I utilized PuppetDB's API to create an endpoint that processes and returns the operational status of virtual ranges. This allowed for real-time monitoring and management, enhancing the ability to quickly assess and respond to various simulation states.",
  },
  {
    id: 3,
    title: "Virtual Range Automation Modules",
    img: "automation.png",
    desc: "I've developed Puppet modules designed to automate various tasks within virtual ranges, including software installation, Active Directory configuration for users, and the integration of real internet access. These modules streamline setup processes and enhance user management, significantly improving operational efficiency and user experience in training environments.",
  },
  {
    id: 4,
    title: "Enhanced In-Range Internet Simulation",
    img: "/internet.png",
    desc: "I developed Puppet modules and scripts to automate the enhancement of simulated internet within virtual ranges, including website scraping, DNS updates, and Nginx configuration. This project improved the realism and functionality of training environments.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
