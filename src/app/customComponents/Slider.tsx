"use client";

import {
  Blocks,
  BuilderBlock,
} from '@builder.io/sdk-react';
import { useEffect, useState } from 'react';

type Slide = {
  slide: BuilderBlock[];
};

type ISliderProps = {
  slides: Slide[];
  builderBlock: {
    id: string | undefined;
  };
};

export const Slider = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  console.log("props: ", props);
  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % props.slides.length);
        setSlideDone(true);
      }, 5000);
    }
  }, [slideDone, props.slides.length]);
  
  return (
    <div
    >
      {props.slides && props.slides.map((item, index) => (
          <div key={`slide-${props.builderBlock?.id}-${index}`}>
            
            <Blocks
              parent={props.builderBlock?.id}
              path={`component.options.slides.${index}.slide`}
              blocks={props.slides[index].slide}
            />
          </div>
      ))}
      <div
      >
        {props.slides && props.slides.map((item, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={`dot-${props.builderBlock?.id}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};