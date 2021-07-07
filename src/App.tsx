import React from "react";
import PomodoroTimer from "./components/pomodoro-timer";

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={10}
        shortRestTime={2}
        longRestTime={5}
        cycles={4}
      ></PomodoroTimer>
    </div>
  );
}

export default App;
