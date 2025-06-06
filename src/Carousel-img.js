import React, { useEffect, useState, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import img1 from "../src/img/fotos_pareja/V+M pedida-002.jpg";
import img2 from "../src//img/fotos_pareja/V+M pedida-021.jpg";
import img3 from "../src//img/fotos_pareja/V+M pedida-027.jpg";
import img4 from "../src//img/fotos_pareja/V+M pedida-031.jpg";
import img5 from "../src//img/fotos_pareja/V+M pedida-041.jpg";
import img6 from "../src//img/fotos_pareja/V+M pedida-069.jpg";
import img7 from "../src//img/fotos_pareja/V+M pedida-075.jpg";
import img8 from "../src//img/fotos_pareja/V+M pedida-053.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handlePrev = () => {
    resetTimeout();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    resetTimeout();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(handleNext, 5000);
    return () => resetTimeout();
    // eslint-disable-next-line
  }, [index]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 500,
        margin: "auto",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      {images.map((img, i) => (
        <Box
          key={i}
          component="img"
          src={img}
          alt=""
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 3s ease, transform 3s ease",
            opacity: index === i ? 1 : 0,
            transform: index === i ? "scale(1)" : "scale(1.05)",
          }}
        />
      ))}

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default Carousel;
