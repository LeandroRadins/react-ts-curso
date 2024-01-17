import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      id: 123,
      name: "Pepegrillo",
      email: "pepegrillo@gmail.com",
    });
  };

  return (
    <div className="card bg-primary-subtle border border-2 border-primary-subtle p-4 mt-4 text-emphasis">
      <h3 className="card-title">Usuario: UseState</h3>
      <hr />
      {!user ? (
        <h1 className="text-center fw-bolder">No hay usuario</h1>
      ) : (
        <div className="row justify-content-center gap-2">
          <h1 className="col-md-auto text-center fw-bolder">
            Hola {user.name}!
          </h1>
        </div>
      )}
      <div className="card-body container text-center">
        <div className="row gap-2">
          <button className="col btn btn-light" onClick={() => login()}>
            Login
          </button>
          <button
            className="col btn btn-danger"
            onClick={() => setUser(undefined)}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
