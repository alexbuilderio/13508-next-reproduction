"use client";

import {
  Blocks,
  BuilderBlock,
  RegisteredComponent,
} from '@builder.io/sdk-react';
import { Flex, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Slide = {
  children: BuilderBlock[];
};

type ISliderProps = {
  children: Slide[];
  builderBlock: {
    id: string | undefined;
  };
};

export const Slider = (props: ISliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeout(() => {
        setActiveIndex((current) => current++);
        setSlideDone(true);
      }, 5000);
    }
  }, [slideDone]);

  return (
    <Flex
      position="relative"
      width="100%"
      padding="0"
      overflow="hidden"
      justifyContent="flex-start"
      alignItems="center"
      direction="row"
      flexWrap="nowrap"
      backgroundColor="black"
    >
      {props.children &&
        props.children.map((item, index) => {
          return (
            <Blocks
              parent={props.builderBlock?.id}
              path={`component.options.slides.${index}.content`}
              blocks={item.children}
              key={`slide-${props.builderBlock?.id}-${index}`}
            />
          );
        })}
      <Flex
        gridColumn="left-start / right-end"
        gridRow="dots-start / dots-end"
        display="flex"
        gap={2}
        justifySelf="center"
        px={3}
        py={2}
        mt={3}
        color="white"
        backgroundColor="gray.700"
        borderRadius="full"
      >
        {props.children &&
          props.children.map((item, index) => {
            return (
              <Button
                backgroundColor="white"
                as={motion.div}
                initial={false}
                animate={{
                  scale: activeIndex === index ? 1.25 : 1,
                  opacity: activeIndex === index ? 1 : 0.5,
                }}
                height="6px"
                width="6px"
                borderRadius="full"
                onClick={() => setActiveIndex(index)}
                key={`slide-${props.builderBlock?.id}-${index}-button`}
              />
            );
          })}
      </Flex>
    </Flex>
  );
};

export const BuilderSlider: RegisteredComponent[] = [
  {
    component: Slider,
    name: 'Slider',
    canHaveChildren: true,
    inputs: [
      {
        name: 'slides',
        type: 'list',
        subFields: [],
      },
    ],
  },
];
