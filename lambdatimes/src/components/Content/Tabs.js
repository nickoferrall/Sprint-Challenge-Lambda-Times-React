import React from 'react';
import Tab from './Tab';
// import { prependOnceListener } from 'cluster';
import PropTypes from "prop-types";

const Tabs = props => {
  // console.log("props = ", props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map(e => 
            <button onClick={props.selectedTab}>
            <Tab 
              tab={e}
              selectedTab={props.selectedTab}
              selectTabHandler={props.selectTabHandler}
              mySelected={props.mySelected}
            />
             </button>
            )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
