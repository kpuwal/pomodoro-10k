"use strict";
import React, { useState } from "react";

import useInterval from "../../../hooks/useInterval";
import DisplayCounter from "./DisplayCounter";

interface CounterProps {
  countOver: () => void;
  pause: boolean;
  min: number;
  sec: number;
}

type TimerProps = {
  min: number,
  sec: number,
}

const Counter = ({ countOver, pause, min, sec }: CounterProps) => {
  const [timer, setTimer] = useState<TimerProps>({min, sec});

  useInterval(() => tick(), 1000);

  const tick = () => {
    if (pause) {
      return;
    }
    if (timer.min === 0 && timer.sec === 0) {
      return countOver();
    }

    if (timer.sec === 0) {
      setTimer({ min: timer.min - 1, sec: 59 });
    } else {
      setTimer({ min: timer.min, sec: timer.sec - 1 });
    }
  };

  return <DisplayCounter sec={timer.sec} min={timer.min} />;
};

export default Counter;
