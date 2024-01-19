import { useState } from "react";
import { Timer } from "./Timer";

export const RootTimer = () => {
  const [Miliseconds, setMiliseconds] = useState(1000);
  const [StopTemp, setStopTemp] = useState(false);

  return (
    <div className="text-center mt-4">
      <Timer miliseconds={Miliseconds} stop={StopTemp} />
      <span>Milisegundos {Miliseconds}</span>
      <div className="grid gap-2 grid-cols-3 mt-4">
        <button
          className="bg-blue-200 border-blue-950 border-2 rounded-md p-2 hover:bg-blue-950 hover:border-blue-100 hover:text-white"
          onClick={() => setMiliseconds(1000)}
        >
          1000
        </button>
        <button
          className="bg-blue-200 border-blue-950 border-2 rounded-md p-2 hover:bg-blue-950 hover:border-blue-100 hover:text-white"
          onClick={() => setMiliseconds(2000)}
        >
          2000
        </button>
        <button
          className="bg-blue-200 border-blue-950 border-2 rounded-md p-2 hover:bg-blue-950 hover:border-blue-100 hover:text-white"
          onClick={() => setMiliseconds(3000)}
        >
          3000
        </button>
      </div>
      <div className="grid gap-2 mt-4">
        <button
          className={`${
            StopTemp
              ? "bg-red-700 border-red-800 hover:bg-red-800"
              : "bg-green-700 border-green-800 hover:bg-green-800"
          } border-2 rounded-md p-2 text-white font-black`}
          onClick={() => {
            setStopTemp(!StopTemp);
          }}
        >
          {StopTemp ? "DETENER TEMPORIZADOR" : "INICIAR TEMPORIZADOR"}
        </button>
      </div>
    </div>
  );
};
