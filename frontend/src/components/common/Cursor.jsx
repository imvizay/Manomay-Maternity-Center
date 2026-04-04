import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;


    

    // cursor move
    const move = (e) => {
      const { clientX, clientY } = e;

      gsap.set(dot, { x: clientX, y: clientY });

      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    // NAV LINK HOVER EFFECT
    const navLinks = document.querySelectorAll(".nav-link");

    const handleEnter = (e) => {
      const link = e.currentTarget;

      gsap.to(link, {
        scale: 1.2,
        duration: 0.3,
      });
      
     ring.classList.add("cursor-active");

      gsap.to(dot, {
        scale: 0,
        duration: 0.2,
      });
    
      gsap.to(ring, {
        scale: 1.4,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      ring.classList.remove("cursor-active");
    
      gsap.to(dot, {
        scale: 1,
        duration: 0.2,
      });
    
      gsap.to(ring, {
        scale: 1,
        duration: 0.4,
      });
    };


    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", handleEnter);
      link.addEventListener("mouseleave", handleLeave);
    });

    //  cleanup
    return () => {
      window.removeEventListener("mousemove", move);

      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleEnter);
        link.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
}