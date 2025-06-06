import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomInputsProps } from "@/types";

function CustomInput({
  control,
  name,
  label,
  type,
  placeholder,
}: CustomInputsProps) {
  // Hooks

  // Backend Calls

  // Refs and States

  // Emits

  // Functions

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[18px] text-gray-700">{label}</FormLabel>
          <FormControl>
            <Input
              className="h-10"
              type={type || "text"}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className="text-red-600" />
        </FormItem>
      )}
    />
  );
}

export default CustomInput;
