export const menu1 = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const menuItem = {
  initial: {
    x: "100px",
  },
  enter: (index: number) => ({
    x: "0px",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1 * index,
    },
  }),
  exit: (index: number) => ({
    x: "100px",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1 * index,
    },
  }),
};
