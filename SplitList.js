import React, { useEffect, useState } from "react";

const SplitList = (props) => {
  return (
    <div className={"split-list"}>
      {props.list.map((item, index) => (
        <div className="split-item" key={index}>
          <div>{index > 0 ? `#${index}` : null}</div>
          <div className="split-click">{item.time}</div>
          <div>{item.event}</div>
        </div>
      ))}
    </div>
  );
};

export default SplitList;
