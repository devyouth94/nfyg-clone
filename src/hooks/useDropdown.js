import { useState, useEffect, useRef } from "react";

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // eslint-disable-next-line
    const onClick = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setIsOpen((prev) => !prev);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return [isOpen, dropRef, handleClick];
};

export default useDropdown;
