import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export function Input({
  type,
  placeholder,
  name,
  error,
  register,
  rules,
}: InputProps) {
  return (
    <div>
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
