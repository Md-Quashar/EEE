import React from "react";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      onCheckedChange?.(newChecked);
      onChange?.(e);
    };

    return (
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...props}
        style={{
          width: "18px",
          height: "18px",
          cursor: "pointer",
          accentColor: "currentColor",
          ...props.style,
        }}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";
