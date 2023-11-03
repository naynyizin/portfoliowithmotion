import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/17835267/pexels-photo-17835267/free-photo-of-woman-in-polo-neck-sweater-jeans-and-combat-boots-posing-in-a-street-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis quas nisi omnis assumenda quasi quae officia eligendi inventore dolorum! Doloribus cum, accusantium aliquid nisi hic amet nemo adipisci dignissimos?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/3612340/pexels-photo-3612340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis quas nisi omnis assumenda quasi quae officia eligendi inventore dolorum! Doloribus cum, accusantium aliquid nisi hic amet nemo adipisci dignissimos?",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1047458/pexels-photo-1047458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis quas nisi omnis assumenda quasi quae officia eligendi inventore dolorum! Doloribus cum, accusantium aliquid nisi hic amet nemo adipisci dignissimos?",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18693461/pexels-photo-18693461/free-photo-of-a-city-with-a-tower-and-a-clock-tower.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis quas nisi omnis assumenda quasi quae officia eligendi inventore dolorum! Doloribus cum, accusantium aliquid nisi hic amet nemo adipisci dignissimos?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
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
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
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
}

export default Portfolio;
