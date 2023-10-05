import React from "react";
import { useGLTF } from "@react-three/drei";
import { motion as motion3d } from "framer-motion-3d";

export default function Model({ mouse, zoom }: { mouse: any; zoom: any }) {
  const model = useGLTF("./three/a.gltf");
  return (
    <motion3d.primitive
      rotation={[mouse.y, mouse.x, 0]}
      scale={zoom}
      object={model.scene}
    ></motion3d.primitive>
  );
}
