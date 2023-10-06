import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { lazy, useEffect, useRef } from "react";

const ModelComponent = lazy(() => import("../three/model"));
const Three = () => {
  const mainDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainDivRef,
    offset: ["0 0", "1 1"],
  });
  const threeZoom = useTransform(scrollYProgress, [0, 1], [10, 200]);
  const textOneOpa = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
  const textOneSca = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 10]);
  const textTwoOpa = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const textTwoSca = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 10]);
  const textThreeOpa = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0, 1, 0],
  );
  const textThreeSca = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0, 1, 10],
  );
  const textFourOpa = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [0, 1, 0]);
  const textFourSca = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8],
    [0, 1, 10],
  );
  const textFiveOpa = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 0]);
  const textFiveSca = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 10]);

  const mouse = {
    x: useSpring(useMotionValue(0), { damping: 30 }),
    y: useSpring(useMotionValue(0), { damping: 30 }),
  };
  
  const handleMouseMove = (event: MouseEvent) => {
    const { innerHeight, innerWidth } = window;
    const { clientX, clientY } = event;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouse.x.set(x);
    mouse.y.set(y);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const t = ["this", "is", "the", "blockchain"];
  return (
    <div ref={mainDivRef} className="h-[500vh] bg-red-950">
      <div className="sticky top-0 h-screen bg-stone-950">
        <Canvas>
          <ambientLight intensity={100} />
          <directionalLight
            color="#facc15"
            position={[0, 0, 0]}
            intensity={1}
          />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Environment preset="studio" />
          <ModelComponent mouse={mouse} zoom={threeZoom} />
        </Canvas>
        <div className="absolute left-0 top-0 -mt-20 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-stone-950 bg-opacity-20 text-9xl capitalize">
          <motion.div
            style={{
              opacity: textOneOpa,
              scale: textOneSca,
            }}
            className="absolute top-1/2 w-full text-center"
          >
            this
          </motion.div>
          <motion.div
            style={{
              opacity: textTwoOpa,
              scale: textTwoSca,
            }}
            className="absolute top-1/2 w-full text-center"
          >
            is
          </motion.div>
          <motion.div
            style={{
              opacity: textThreeOpa,
              scale: textThreeSca,
            }}
            className="absolute top-1/2 w-full text-center"
          >
            the
          </motion.div>
          <motion.div
            style={{
              opacity: textFourOpa,
              scale: textFourSca,
            }}
            className="absolute top-1/2 w-full text-center"
          >
            new
          </motion.div>
          <motion.div
            style={{
              opacity: textFiveOpa,
              scale: textFiveSca,
            }}
            className="absolute top-1/2 w-full text-center"
          >
            WEB3
          </motion.div>
        </div>
      </div>
    </div>
  );
};
// useGLTF.preload("./uni.glb");

export default Three;
