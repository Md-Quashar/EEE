import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (props, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        style={{
          fontSize: "14px",
          fontWeight: 500,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          ...props.style,
        }}
      />
    );
  }
);
Label.displayName = "Label";
