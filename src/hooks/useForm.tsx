import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { id, name, value } = target;
    setForm({ ...form, [id]: value, [name]: value });
  };

  const resetState = () => {
    setForm(initialState);
  };

  return { form, handleChange, resetState };
};
