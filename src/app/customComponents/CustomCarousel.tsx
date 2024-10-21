//src/components/CustomCarousel.tsx

"use client";
import React, { useState } from 'react';
import { Blocks, BuilderBlock } from '@builder.io/sdk-react';

type Carousel = {
  children: BuilderBlock[];
};
type CarouselProps = {
  slides: Carousel[];
  builderBlock: {
    id: string | undefined;
  };
};

export const Carousel = (props: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % props?.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + props?.slides?.length) % props?.slides?.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="carousel-slides">
        {props.slides && props.slides.map((slide, index) => (
          <div
            key={index}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <Blocks
              parent={props.builderBlock?.id}
              path={`component.options.slides.${index}.content`}
              blocks={slide.children}
            />
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};