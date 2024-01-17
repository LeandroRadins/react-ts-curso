import { useState } from "react";
import { Timer } from "./Timer";
import { Button } from "./ui/button";

export const TimerPadre = () => {
  const [Milisegundos, setMilisegundos] = useState(1000);

  return (
    <div className="text-center mt-4">
      <Timer />
      <span>Milisegundos {1000}</span>
      <div className="grid gap-2 grid-cols-3 mt-4">
        <Button className="bg-red-500" onClick={() => setMilisegundos(1000)}>
          1000
        </Button>
        <Button
          className="bg-yellow-500 hover:bg-yellow-700 text-yellow-950 hover:text-yellow-100"
          onClick={() => setMilisegundos(2000)}
        >
          2000
        </Button>
        <Button className="bg-green-500 hover:bg-green-700 text-green-950 hover:text-green-100" onClick={() => setMilisegundos(3000)}>
          3000
        </Button>
      </div>
    </div>
  );
};
