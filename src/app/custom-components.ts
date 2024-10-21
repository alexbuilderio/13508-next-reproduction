/**
 *  src/custom-components.ts
 */

import { RegisteredComponent } from '@builder.io/sdk-react';
import { Carousel } from './customComponents/CustomCarousel';
import { Slider } from './customComponents/Slider';

export const customComponents: RegisteredComponent[] = [
  
  {
    component: Slider,
    name: 'Slider',
    canHaveChildren: true,
    shouldReceiveBuilderProps: {
      /** To access builder's Blocks relative to your parent */
      builderBlock: true,
    },
    inputs: [
      {
        name: 'slides',
        type: 'list',
        subFields: [{
          name: 'slide',
          type: 'uiBlocks',
          defaultValue: [],
        }],
        defaultValue: [
          {
            slide: [],
          },
        ],
      },
      
    ],
  },
  {
    component: Carousel,
    name: 'TabFields',
    /** To accept children in your custom component and by default it is false */
    canHaveChildren: true,
    /** To receieve Builder props inside your custom component: by default false  */
    shouldReceiveBuilderProps: {
      /** To access builder's Blocks relative to your parent */
      builderBlock: true,
    },
    inputs: [
      {
        name: 'slides',
        type: 'list',
        subFields: [
        ],
        defaultValue: [
          {
            '@type': '@builder.io/sdk:Element',
            component: {
              name: 'Text',
              options: {
                text: 'Carousel Text - Im editable'
              }
            },
          }],
      },
    ],
  },
];