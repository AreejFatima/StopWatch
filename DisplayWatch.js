
 
 const DisplayWatch = (props) =>  {
    return (  
        <div className={'stopwatch-display'}>
        <span>
          {props.formatTime(props.hour)}:
          {props.formatTime(props.min)}:
          {props.formatTime(props.sec)}.
          {props.formatTime(props.msec)}
        </span>
      </div>
    );
}
 
export default DisplayWatch;

