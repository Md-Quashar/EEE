import React, { useState, useRef, useEffect } from "react";

interface SelectContextType {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextType | undefined>(
  undefined
);

const useSelect = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("useSelect must be used within a Select component");
  }
  return context;
};

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export const Select = ({ value, onValueChange, children }: SelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      {children}
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(({ children, ...props }, ref) => {
  const { setOpen, open } = useSelect();

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setOpen(!open)}
      {...props}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        textAlign: "left",
        cursor: "pointer",
        ...props.style,
      }}
    >
      <span style={{ flex: 1 }}>{children}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
        }}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

export const SelectValue = React.forwardRef<
  HTMLSpanElement,
  SelectValueProps
>(({ placeholder, ...props }, ref) => {
  const { value } = useSelect();

  return (
    <span ref={ref} {...props}>
      {value || placeholder}
    </span>
  );
});
SelectValue.displayName = "SelectValue";

interface SelectContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  SelectContentProps
>(({ children, ...props }, ref) => {
  const { open, setOpen } = useSelect();
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      {...props}
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        marginTop: "4px",
        maxHeight: "200px",
        overflowY: "auto",
        zIndex: 1000,
        borderRadius: "6px",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
});
SelectContent.displayName = "SelectContent";

interface SelectItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectItemProps
>(({ value, children, ...props }, ref) => {
  const { value: selectedValue, onValueChange, setOpen } = useSelect();
  const isSelected = selectedValue === value;

  const handleClick = () => {
    onValueChange(value);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      {...props}
      style={{
        padding: "8px 12px",
        cursor: "pointer",
        backgroundColor: isSelected ? "rgba(31, 111, 235, 0.1)" : "transparent",
        fontWeight: isSelected ? 600 : 400,
        transition: "background-color 0.2s",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
});
SelectItem.displayName = "SelectItem";
