import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { ComponentProps } from "react";

interface InputFieldProps extends ComponentProps<typeof Input> {
  label: string;
  description?: string;
}

export function InputField({
  label,
  description,
  id,
  ...props
}: InputFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>

      <Input id={id} {...props} />

      {description && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}
