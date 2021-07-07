import React from "react";
import secondsToMinutes from "../utils/seconds-to-minutes";

interface Props {
  mainTimer: number;
}

function Timer({ mainTimer }: Props): JSX.Element {
  return <div className="timer">{secondsToMinutes(mainTimer)}</div>;
}

export default Timer;
