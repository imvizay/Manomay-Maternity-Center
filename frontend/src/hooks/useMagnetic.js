import { useEffect } from "react";
import { gsap } from "gsap";

export default function useMagnetic(loading) {
  useEffect(() => {
    if(loading) return ;
   

    const cursor = document.querySelector(".custom-cursor");
      
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 2 })
    })
    
    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1 })
    })

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", null);
        el.removeEventListener("mouseleave", null);
      });
    };
  }, [loading]);
}