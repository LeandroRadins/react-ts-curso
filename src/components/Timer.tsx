import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }, []);

  return <h2 className="font-black text-5xl">{seconds}</h2>;
};
