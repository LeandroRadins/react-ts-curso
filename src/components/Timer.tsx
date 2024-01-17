import { useEffect, useRef, useState } from "react";

type TimerProps = {
  miliseconds: number;
  stop?: boolean;
};

export const Timer = (args: TimerProps) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  const handleStop = () => {
    clearInterval(ref.current);
  };

  useEffect(() => {
    ref.current && handleStop();
    args.stop
      ? (ref.current = setInterval(
          () => setSeconds((s) => s + 1),
          args.miliseconds
        ))
      : handleStop();
    return () => {
      ref.current && handleStop();
    };
  }, [args.miliseconds, args.stop]);

  return <h2 className="font-black text-5xl">{seconds}</h2>;
};
