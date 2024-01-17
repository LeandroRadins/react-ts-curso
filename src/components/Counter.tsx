import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const sumar = (numero: number) => {
    setCounter(counter + numero);
  };

  return (
    <div className="card p-4">
      <h3 className="card-title">Contador: UseState</h3>
      <hr />
      <h1 className="text-center fw-bolder">{counter}</h1>
      <div className="card-body container text-center">
        <div className="row gap-2">
          <button
            onClick={() => sumar(1)}
            className="col btn btn-outline-primary mt-2"
          >
            +1
          </button>
          <button
            onClick={() => sumar(2)}
            className="col btn btn-outline-primary mt-2"
          >
            +2
          </button>
        </div>
        <div className="row gap-2">
          <button
            onClick={() => setCounter(0)}
            className="col-12 btn btn-outline-danger mt-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
