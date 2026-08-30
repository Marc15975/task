import { InputField } from "@/components/ui/InputField";

const Form = () => {
  return (
    <div className="flex flex-col gap-2">
      <InputField label="Email" type="email" id="email" />
      <InputField label="Password" type="password" id="password" />
    </div>
  );
};

export default Form;
