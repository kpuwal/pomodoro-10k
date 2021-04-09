"use strict";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Root";

import CounterCycle from "./counter/CounterCycle";
import DisplayIdle from "./counter/DisplayIdle";
import DisplayMode from "./info/Mode";
import Controller from "./controller/Controller";
import TimerSelect from "./timer/TimerSelect";

const Timer: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const session = useSelector((state: RootState) => state.session);
  const timers = useSelector((state: RootState) => state.timers);
  const card = useSelector((state: RootState) => state.stats);
  const info = useSelector((state: RootState) => state.info);
  
  return (
    <>
      {counter.start 
        ? 
          <CounterCycle
            focus={timers.selected.data.focus}
            relax={timers.selected.data.relax}
            infoMessage={info.message}
            min={session.session.min}
            sec={session.session.sec}
            cycle={counter.cycle}
            pause={counter.pause}
          />
        : 
          <DisplayIdle
            min={session.selected.min}
            sec={session.selected.sec}  
          />
      }
      <DisplayMode
        start={counter.start}
        infoMode={info.mode}
      />
      <Controller
        start={counter.start}
        pause={counter.pause}
        focus={timers.selected.data.focus}
        card={card.selected}
      />
      <TimerSelect {...{ timers }} />
    </>
  );
}

export default Timer;
