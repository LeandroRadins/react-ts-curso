import { useForm } from "@/hooks/useForm";
import dog from "../assets/dog.svg";

interface FormData {
  name: string;
  email: string;
}

export const Form = () => {
  const { form, handleChange, resetState } = useForm<FormData>({
    name: "Leandro Radins",
    email: "leandroradins@hotmail.com",
  });

  return (
    <div className="flex flex-col gap-2 text-center py-14">
      <div className="grid grid-cols-3 place-items-center">
        <img
          src={dog}
          alt="perrito-bachicha"
          className="col-start-2 w-28 aspect-square shadow-inner shadow-blue-600 border-2 border-blue-700 rounded-full"
        />
      </div>
      <h1 className="font-black text-4xl">Seja Benvindo Mano!</h1>
      <h3>
        No tiene una cuenta?{" "}
        <span>
          <a href="" className="font-bold text-blue-200 hover:text-blue-300">
            Ingrese aquí
          </a>
        </span>
      </h3>
      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
        className="border-2 border-blue-950 rounded-md p-2 mt-4 text-blue-950"
        placeholder="Ingrese su nombre"
        onChange={handleChange}
      />
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        className="border-2 border-blue-950 rounded-md p-2 text-blue-950"
        placeholder="Ingrese un correo electrónico"
        onChange={handleChange}
      />
      <button
        className="w-1/3 place-self-end bg-blue-800 rounded-md mt-4 p-2 text-white font-bold hover:bg-blue-900"
        onClick={resetState}
      >
        Siguiente
      </button>
      <pre>{form.name}</pre>
    </div>
  );
};
