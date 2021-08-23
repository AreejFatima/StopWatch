import React, { useEffect, useState, useRef } from "react";
import DisplayWatch from "./DisplayWatch";
import "./StopWatch.css";
import SplitList from "./SplitList";

const StopWatch = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMsec] = useState(0);
  const [running, setRunning] = useState(false);
  const [list, setList] = useState([{ time: "", event: "" }]);


  const onStart = () => {
    if (!running) {
      setRunning(true);
    }
  };

  const onReset = () => {
    setHour(0);
    setMin(0);
    setMsec(0);
    setSec(0);
  };

  const formatTime = (time) => {
    let formatted = time.toString();
    if (formatted.length < 2) {
      formatted = "0" + formatted;
    }
    return formatted;
  };

  const formattedString = () => {
    return `${formatTime(hour)}:${formatTime(min)}:${formatTime(
      sec
    )}:${formatTime(msec)}`;
  };

  const onSplit = (eventValue) => {
    let tempTime = formattedString();
    const tempObj = {
      time: tempTime,
      event: eventValue,
    };
    setList((prevArray) => [...prevArray, tempObj]);
  };

  const onPause = () => {
    setRunning(false);
    onSplit("pause");
  };

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
          setInterval(0);
        }

        if (sec > 59) {
          setMin(min + 1);
          setSec(0);
          setInterval(0);
        }

        if (msec > 999) {
          setSec(sec + 1);
          setMsec(0);
          setInterval(0);
        }

        if (msec <= 999) {
          setMsec(msec + 10);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="stopwatch">
      <h2 className="heading">Stopwatch</h2>
      {!running && (
        <button className="start" onClick={onStart}>
          START
        </button>
      )}
      {running && (
        <button className="pause" onClick={onPause}>
          PAUSE
        </button>
      )}
      <button className="reset" onClick={onReset} disabled={running}>
        RESET
      </button>

      <button
        className="split"
        onClick={() => onSplit("split")}
        disabled={!running}
      >
        SPLIT
      </button>
      <DisplayWatch formattedString={formattedString} />
      <SplitList formattedString={formattedString} list={list} />
    </div>
  );
};

export default StopWatch;
