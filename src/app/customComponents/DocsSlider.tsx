// 1. Add imports 
import React, { useState } from 'react';
import { BuilderBlocks, Builder } from '@builder.io/react';


// 2. Create your component. 
// This is a tabs component with some basic styles. When the user clicks 
// on a tab, that content becomes active.
function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div
        style={{
          display: 'flex',
          overflow: 'auto',
        }}
      >
        {props.tabs?.map((item, index) => (
          <span
            key={index}
            style={{
              padding: 20,
              color: activeTab === index ? 'blue' : '#000',
            }}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
      {props.tabs?.length && (
        <BuilderBlocks
          parentElementId={props.builderBlock.id}
          dataPath={`component.options.tabs.${activeTab}.content`}
          blocks={props.tabs[activeTab].content}
        />
      )}
    </>
  );
}
// 3. Configure BuilderBlocks. The above section with BuilderBlocks 
// tells Builder what to expect: 
// the parent id, the path to the child component, 
// and what the blocks should be made of. 
// Here, the blocks are made of the content of the active tab 

// 4. Register your component. This component is called Tabs, is of type 
// list and contains two subFields: a label and the content.
// As a best practice, provide a defaultValue. The default label is 
// "Tab 1" and the content is an empty array.

Builder.registerComponent(Tabs, {
  name: 'Tabs',
  inputs: [
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'New tab',
        },
        {
          name: 'content',
          type: 'uiBlocks',
          defaultValue: [],
        },
      ],
      defaultValue: [
        {
          label: 'Tab 1',
          content: [],
        },
      ],
    },
  ],
});