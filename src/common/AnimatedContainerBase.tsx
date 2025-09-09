"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

import { ReactNode } from "react";

interface AnimatedContainerBaseProps {
  quick?: boolean;
  children: ReactNode;
}

export const AnimatedContainerBase = (props: AnimatedContainerBaseProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      initial={{ opacity: props.quick ? 0.5 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: props.quick ? 0.5 : 0.7 }}
    >
      <div>{props.children}</div>
    </motion.div>
  );
};
