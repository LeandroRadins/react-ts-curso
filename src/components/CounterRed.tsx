// TODO 1: Resetear el input y el boton asociado a 0 si el valor es negativo y si doy click en "reset"
// TODO 1*: Hacer que el input solo acepte numeros y mejorar el funcionamiento con un useEffect
// TODO 2: Controlar si puedo hacer todo el cambio de estado usando solo useRef.

import { useReducer, useRef, useState } from "react";

const initialState = {
  counter: 0,
};

type ActionType =
  | {
      type: "incrementNumber";
      payload?: number;
    }
  | {
      type: "reset";
    };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementNumber":
      return {
        ...state,
        counter: state.counter + (action.payload || 0),
      };
    case "reset":
      return {
        ...state,
        counter: 0,
      };

    default:
      return state;
  }
};

export const CounterRed = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const [input, setInput] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="text-center mt-4">
      <span className="font-black text-5xl">{state.counter}</span>
      <div className="grid gap-2 grid-cols-3 grid-rows-2 mt-4">
        <button
          className="bg-blue-200 border-blue-950 border-2 rounded-md p-2 hover:bg-blue-950 hover:border-blue-100 hover:text-white"
          onClick={() => {
            dispatch({ type: "incrementNumber", payload: 1 });
          }}
        >
          +1
        </button>
        <button
          className="bg-blue-200 border-blue-950 border-2 rounded-md p-2 hover:bg-blue-950 hover:border-blue-100 hover:text-white"
          onClick={() => {
            dispatch({ type: "incrementNumber", payload: 2 });
          }}
        >
          +2
        </button>
        <button
          className="bg-blue-200 border-blue-950 border-2 rounded-md p-2 hover:bg-blue-950 hover:border-blue-100 hover:text-white"
          onClick={() => {
            dispatch({ type: "incrementNumber", payload: 3 });
          }}
        >
          +3
        </button>
        <input
          id="newCounter"
          type="number"
          className="border-2 border-blue-950 rounded-md p-2 text-center col-span-2"
          placeholder="Ingrese un número"
          ref={inputRef}
          onChange={() => {
            if (inputRef.current?.value) {
              setInput(parseInt(inputRef.current.value));
              return;
            }
          }}
        />
        <button
          disabled={input <= 0}
          className="bg-blue-200 border-blue-950 border-2 rounded-md p-2 hover:bg-blue-950 hover:border-blue-100 hover:text-white "
          onClick={() => {
            dispatch({ type: "incrementNumber", payload: input });
          }}
        >
          {input <= 0 ? "" : "+"}
          {input}
        </button>
      </div>
      <div className="grid gap-2 mt-2">
        <button
          className="border-2 rounded-md p-2 bg-red-700 border-red-800 hover:bg-red-800 text-white font-black"
          onClick={() => {
            dispatch({ type: "reset" });
            inputRef.current!.value = "";
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};
