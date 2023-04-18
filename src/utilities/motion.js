export const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const containerItem = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};

export const gridContainer = {
  initial: {},
  animate: {
    transition: {
      duration: 0.35,
      staggerChildren: 0.15,
    },
  },
};

export const gridItem = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      stiffness: 200,
    },
  },
};

export const greeting = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.6,
      staggerChildren: 0.175,
    },
  },
};

export const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      duration: 1,
    },
  },
};

export const mobileNavContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.175,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.6,
      staggerChildren: 0.175,
    },
  },
};

export const navItem = {
  initial: {
    opacity: 0,
    x: -75,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      mass: 1.5,
      duration: 0.5,
    },
  },
  exit: {
    x: -75,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
};
