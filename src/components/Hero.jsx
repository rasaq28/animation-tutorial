import React from 'react';
import homeAnimation from '../animation';
import {motion} from 'framer-motion';
import { useScroll } from '../useScroll';

const Hero = () => {
    const [element, controls] = useScroll()
  return (
    <motion.div
      className="hero"
      ref={element}
     >
      <motion.h1  variants={homeAnimation} animate={controls}
      transition={{delay: 0.3, duration: 0.6, type: 'tween'}}>Bank For The Future</motion.h1>
      <motion.p  variants={homeAnimation} animate={controls}
      transition={{delay: 0.3, duration: 0.7, type: 'tween'}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        quo quae molestias?
      </motion.p>
    </motion.div>
  );
};

export default Hero;

