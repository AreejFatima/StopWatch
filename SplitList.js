import React, { useEffect, useState } from "react";

const SplitList = (props) => {
  let x = props.splitValue();
  return (
    <div className={"split-list"}>
      {props.list.map((item, index) => (
        <div className="split-item" key={index}>
          <div>#{index}</div>
          <div className="split-click">{item}</div>
          <div>{x}</div>
        </div>
      ))}
    </div>
  );
};

export default SplitList;
