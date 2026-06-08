import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const moveMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      gsap.set(cursor, {
        x: pos.x,
        y: pos.y,
      });

      requestAnimationFrame(animate);
    };

    animate();

    const elements = document.querySelectorAll("a, button");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });

      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;