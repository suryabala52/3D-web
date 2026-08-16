import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0,
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mMove = (el: MouseEvent) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };
    const mLeave = () => setHidden(true);
    const mEnter = () => setHidden(false);
    const mDown = () => setClicked(true);
    const mUp = () => setClicked(false);

    addEventListeners();
    return () => removeEventListeners();
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-white mix-blend-difference pointer-events-none z-[9999] transition-transform duration-100 ease-out flex items-center justify-center`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${clicked ? 0.8 : hidden ? 0 : 1})`,
      }}
    >
      <div
        className={`w-2 h-2 bg-white rounded-full transition-transform duration-200 ${clicked ? "scale-50" : "scale-100"}`}
      />
    </div>
  );
};

export default CustomCursor;
