export const fadeOut = {
  hidden: { opacity: 1, y: 0 },
  show: {
    y: -300,
    opacity: 0,
    transition: { ease: "easeIn", duration: 3 },
  },
};

export const fadeOutLeft = {
  hidden: { opacity: 1, x: 0 },
  show: {
    x: -300,
    opacity: 0,
    transition: { ease: "easeIn", duration: 3 },
  },
};

export const fadeIn = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 1.5 },
  },
};

export const pageVariants = {
  in: {
    opacity: 0,
    x: "100vw",
  },
  out: {
    opacity: 1,
    x: 0,
  },
};

export const pageTransition = {
  type: "spring",
  stiffness: 50,
  delay: 1,
  duration: 2,
};
