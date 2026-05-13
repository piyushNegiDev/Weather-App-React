import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }} // Center the cursor
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        border: "4px solid blue",
        borderRadius: "50%",
        pointerEvents: "none", // Important: allows clicking through the cursor
        zIndex: 9999,
      }}
    ></motion.div>
  );
};
