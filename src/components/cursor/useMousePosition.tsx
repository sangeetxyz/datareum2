import { MousePosition } from "@/types/types";
import { useState, useEffect } from "react";

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
  });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
