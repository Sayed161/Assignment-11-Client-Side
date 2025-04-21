import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const BacktoTop = () => {
  const [isVisible, visiableSet] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      visiableSet(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    isVisible && (
      <button
        onClick={scrollTop}
        className="fixed right-2 bottom-0 lg:right-0 bg-black text-white px-2 py-7 animate-bounce rounded-full shadow-lg hover:bg-orange-700 transition duration-300 text-3xl"
      >
<FaArrowUp />
      </button>
    )
  );
};

export default BacktoTop;
