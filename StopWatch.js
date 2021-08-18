import { useEffect, useState } from "react";
import DisplayWatch from "./DisplayWatch";

const StopWatch = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMsec] = useState(0);
  const [running, setRunning] = useState(false);

  const onStart = () => {
    if (!running) {
      setRunning(true);
    }
  };

  const onPause = () => {
    setRunning(false);
  };

  const onReset = () => {
    setHour(0);
    setMin(0);
    setMsec(0);
    setSec(0);
  };

  const onSplit = () => {
    console.log("splitt");
  };

  const formatTime = (time) => {
    let formatted = time.toString();
    if (formatted.length < 2) {
      formatted = "0" + formatted;
    }
    return formatted;
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
      <h2>Stopwatch</h2>
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
      <button className="reset" onClick={onReset}>
        RESET
      </button>
      <DisplayWatch
        hour={hour}
        min={min}
        sec={sec}
        msec={msec}
        formatTime={formatTime}
      />
    </div>
  );
};

export default StopWatch;
