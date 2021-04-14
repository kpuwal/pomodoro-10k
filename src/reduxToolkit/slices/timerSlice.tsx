"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timer, TimerProps, DataProps } from "../models";

type RunningTimerProps = {
  min: number, sec: number,
};

const initialState = {
  timersList: [
    { idx: 1, data: { focus: 45, relax: 15 } },
    { idx: 2, data: { focus: 25, relax: 5 } },
  ] as TimerProps[],
  selected: { idx: 1, data: { focus: 45, relax: 15 } } as TimerProps,
  runningTimer: { min: 45, sec: 0 } as RunningTimerProps,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    runTimer: (state, action: PayloadAction<number>) => {
      state.runningTimer = {min: action.payload, sec: 0};
    },
    createTimer: (state, action: PayloadAction<DataProps>) => {
      const timer = Timer(action.payload);
      state.timersList.push(timer);
    },
    deleteTimer: (state, action: PayloadAction<TimerProps>) => {
      state.timersList = state.timersList.filter((item) => {
        return item.idx !== action.payload.idx;
      })
    },
    selectTimer: (state, action: PayloadAction<TimerProps>) => {
      state.selected = action.payload;
      state.runningTimer = {min: action.payload.data.focus, sec: 0};
    },
    clearTimersAS: () => initialState
  }
});

export const { createTimer, deleteTimer, selectTimer, clearTimersAS } = timerSlice.actions;
export default timerSlice.reducer;