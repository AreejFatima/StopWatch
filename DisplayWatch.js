const DisplayWatch = (props) => {
  return <div className="stopwatch-display">{props.formattedString()}</div>;
};

export default DisplayWatch;
