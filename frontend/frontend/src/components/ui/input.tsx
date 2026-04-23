import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: "6px",
          fontSize: "14px",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          transition: "border-color 0.2s, box-shadow 0.2s",
          ...props.style,
        }}
      />
    );
  }
);
Input.displayName = "Input";
