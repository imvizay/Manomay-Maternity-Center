import { useEffect } from "react";
import { gsap } from "gsap";

export function useNavHover(loading) {
  useEffect(() => {
    if(loading) return;
    
    const links = document.querySelectorAll(".nav-links li");

   

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", link._enter);
        link.removeEventListener("mouseleave", link._leave);
      });
    };
  }, []);
}