import { FieldError } from "react-hook-form";
import { Input } from "./ui/input";

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
    label,
    type = 'text',
    register,
    name,
    defaultValue,
    inputProps,
    error,

}: InputFieldProps) => {
  return (
    <div className=" flex flex-col gap-2 w-full md:w-1/4">
        <label className=" text-xs text-gray-500">{label}</label>
        <Input
          type="text"
          {...register(name)}
        //   className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full "
            {...inputProps}
            defaultValue={defaultValue}
        />
        {error?.message && (
          <p className="text-xs text-red-400">
            {error.message.toString()}
          </p>
        )}
      </div>
  )
}

export default InputField