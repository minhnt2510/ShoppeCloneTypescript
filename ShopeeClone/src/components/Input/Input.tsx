import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface Props {
  type: React.HTMLInputTypeAttribute;
  errorMessagse?: string;
  placeholder?: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  autoComplete?: string;
}
const Input = ({
  type,
  errorMessagse,
  placeholder,
  className,
  name,
  register,
  rules,
  autoComplete,
}: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        className="p-3 w-full outline-none border border-gray-400 focus:border-gray-600 rounded-sm
                  focus:shadow-sm"
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, rules)}
      />
      <div className="mt-1 text-red-500 min-h-[1.25rem] text-sm">
        {errorMessagse}
      </div>
    </div>
  );
};

export default Input;
