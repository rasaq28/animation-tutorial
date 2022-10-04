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

//ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDOvZM9ZZjN1+qldrywRLTOxB2ujkoiIYkGoz2WpTqOlbBJbgc3pB3F3XyJ4vR/MQOAzuzgS25wBXaGO361+Qk2OQtofUzRqeSnItr3MC2phryNBu9YxpSHxGhClwn5Ax8Yo547hfAFhYvgpH7afITKDEn8iM6Majxj8doXWJLiGOi3VqRiU+m2HNOgnwxRzGF6HMt+vB5THLYNZdQXd03nKqQ6aNCqidRpIBJCWjqvikB9RYn80ykvTIXR4npy9JyZsrGO5vRMiUr7jIADYk8vcNE89Jklv6xLke35ukDhp2Blx5SplOllfTB0mT+5JUHBg6Vta8nda1da7L65banKZihbmXZeDc7MU5QQvOv7H6X7BFttMVE1l5o1YF6iLZXXXRsQ77pt3735qSvpVDGbcI6GQEjD/VC+P75hLR1AQb3BXQHdbSSQSEVqa9MGACb5obMPM53Zi9zGqpN1GQKMc19lkxfr71py92X9DAsln38Ntvx6mNV71hSBbZ2iORx/lpi5XwN74m0gVnf+UjG8dmlFIVgctg9d+VHfixY92QV9HakdPkZj63SvT6N5WwqvlCEdJzTdQs21pGPkTEO6Ll2yhCdXacuSbgk3nz7HpOMVXCk4XZpHg3dgUXDiQRAcGKuUDRXRhRFtpF+nFqhxpnHY+b6UYnLp/EpijoU0mQ== razaq@loyaltysolutionsnigeria.com