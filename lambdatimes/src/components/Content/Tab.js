import React from 'react';

const Tab = props => {
  // console.log("props in Tab =", props.tab)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      // if (props.tab === props.selectedTab) {
      //   console.log("Selected tab success!")
      // }
      // else {
      //   "No match"
      // }

    //   <h1 
    //   onClick={() => props.changeComplete(props.propsItem.id)}
    //   className={`myTask ${props.propsItem.completed}`}
    // >

  return (
    <div
      className={''}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
