import React, { useEffect } from "react";

interface DialogProps {
  open: boolean;
  children: React.ReactNode;
}

interface DialogContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onPointerDownOutside?: (e: PointerEvent) => void;
  onEscapeKeyDown?: (e: KeyboardEvent) => void;
}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface DialogDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Dialog = ({ open, children }: DialogProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </div>
  );
};

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(
  (
    {
      className,
      onPointerDownOutside,
      onEscapeKeyDown,
      children,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && onEscapeKeyDown) {
          onEscapeKeyDown(e);
        }
      };

      const handlePointerDown = (e: PointerEvent) => {
        if (
          e.target instanceof HTMLElement &&
          e.target.getAttribute("data-dialog-overlay") === "true" &&
          onPointerDownOutside
        ) {
          onPointerDownOutside(e);
        }
      };

      if (onEscapeKeyDown) {
        document.addEventListener("keydown", handleEscape);
      }
      if (onPointerDownOutside) {
        document.addEventListener("pointerdown", handlePointerDown);
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("pointerdown", handlePointerDown);
      };
    }, [onEscapeKeyDown, onPointerDownOutside]);

    return (
      <div
        data-dialog-overlay="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 40,
        }}
      >
        <div
          ref={ref}
          className={className}
          {...props}
          style={{
            position: "relative",
            zIndex: 50,
            maxWidth: "90vw",
            ...props.style,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);
DialogContent.displayName = "DialogContent";

export const DialogHeader = React.forwardRef<
  HTMLDivElement,
  DialogHeaderProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    {...props}
  />
));
DialogHeader.displayName = "DialogHeader";

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={className} {...props} />
));
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <p ref={ref} className={className} {...props} />
));
DialogDescription.displayName = "DialogDescription";
