import { useState, useEffect } from "react";

import { MutableRefObject } from "react";

function useHoverPosition(targetRef: MutableRefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const targetElement = targetRef.current;

    if (targetElement) {
      targetElement.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup on component unmount or ref change
    return () => {
      if (targetElement) {
        targetElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [targetRef]);

  return position;
}

export default useHoverPosition;
