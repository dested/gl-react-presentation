import {useEffect, useState} from 'react';

export function useTimeLoop(refreshRate: number = 60): number {
  const [cancel, setCancel] = useState(false);
  const [time, setTime] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let startTime: number = 0;
    let lastTime: number = 0;
    const interval = 1000 / refreshRate;
    lastTime = -interval;
    const loop = (t: number) => {
      if (cancel) {
        return;
      }
      requestAnimationFrame(loop);
      if (!startTime) {
        startTime = t;
      }
      if (t - lastTime > interval) {
        lastTime = t;
        setTime(t - startTime);
        setTick(tick + 1);
      }
    };
    requestAnimationFrame(loop);

    return () => {
      setCancel(true);
    };
  }, [refreshRate]);

  return time;
}
