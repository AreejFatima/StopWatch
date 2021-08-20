import { useEffect, useState } from "react";

const SplitList = (props) => {
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
      const tempStr = `${props.formatTime(props.hour)}:${props.formatTime(
        props.min
      )}:${props.formatTime(props.sec)}:${props.formatTime(props.msec)},`;
      const tempObj = {
        time: tempStr,
        event: "",
      };
      setData(tempObj);
      console.log(data);
    }
  };

  const onSplit = () => {
    saveData();
    setListState();
  };

  return (
    <div className={"split-list"}>
      <button className="split" onClick={onSplit}>
        SPLIT
      </button>
      {/* <h3>SPLIT TABLE</h3>
            <ul>
                {list.map((item, index) => <li key={index}>{`${index}${"#"} ${item}${"split"} `} </li>)}
            </ul> */}
      {list.map((item, index) => (
        <div className="split-item" key={index}>
          <div>#{index}</div>
          <div className="split-click">{item}</div>
          <div>{"split"}</div>
        </div>
      ))}
    </div>
  );
};

export default SplitList;
