import React, { useEffect, useState } from "react";

const SplitList = React.forwardRef((props, ref) => {
  const [list, setList] = useState([]);
  const [data, setData] = useState({ time: "", event: "" });

  const setListState = () => {
    if (data.time) {
      setList(data.time.split(","));
    } else {
      setList([]);
    }
  };

  //useEffect(setListState, [])

  const saveData = () => {
    if (data.time) {
      const tempStr = `${props.formatTime(props.hour)}:
            ${props.formatTime(props.min)}:
            ${props.formatTime(props.sec)}:
            ${props.formatTime(props.msec)},`;
      data.time = data.time + tempStr;
    } else {
      const tempStr = `${props.formatTime(props.hour)}:
      ${props.formatTime(props.min)}:
      ${props.formatTime(props.sec)}:
      ${props.formatTime(props.msec)}:,`;
      data.time = tempStr;
    }
  };

  const onSplit = () => {
    saveData();
    setListState();
  };

  React.useImperativeHandle(ref, () => ({
    onSplit: () => {
      saveData();
      setListState();
    },
  }));

  return (
    <div className={"split-list"}>
      {list.map((item, index) => (
        <div className="split-item" key={index}>
          <div>#{index}</div>
          <div className="split-click">{item}</div>
          <div>{"split"}</div>
        </div>
      ))}
    </div>
  );
});

export default SplitList;
