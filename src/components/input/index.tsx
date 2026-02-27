import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  text?: string;
}

export function Input({
  type,
  placeholder,
  name,
  error,
  register,
  rules,
  text,
}: InputProps) {
  return (
    <div>
      {text && (
        <label
          htmlFor={name}
          className="font-bold mx-2 text-2xl inline-block transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          {text}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
        className="w-full border-2 rounded-md h-11 px-2"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
