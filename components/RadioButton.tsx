import { TTempUnit } from "@/app/types/types";
import React from "react";

type RadioButtonProps = {
  id: string;
  value: TTempUnit;
  checked: boolean;
  onChange: (value: TTempUnit) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value,
  checked,
  onChange,
}) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        name="tempUnit"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default RadioButton;
