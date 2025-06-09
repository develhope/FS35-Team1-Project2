import { useEffect } from "react";
import "./GlobalRippleEffect.css";

function GlobalRippleEffect() {
  useEffect(() => {
    let lastTouchTime = 0;

    const createRipple = (x, y) => {
      const ripple = document.createElement("div");
      ripple.className = "global-ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    };

    const handleClick = (e) => {
      // Ignora il click se è avvenuto subito dopo un touch
      if (Date.now() - lastTouchTime < 500) return;
      createRipple(e.clientX, e.clientY);
    };

    const handleTouchStart = (e) => {
      lastTouchTime = Date.now();
      const touch = e.touches[0];
      createRipple(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return null;
}

export default GlobalRippleEffect;
