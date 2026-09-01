import { forwardRef, useId, type ComponentProps, type ReactNode } from "react";

export type TextFieldProps = Omit<ComponentProps<"input">, "id"> & {
  label?: string;
  error?: string;
  endAdornment?: ReactNode;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, endAdornment, className = "", ...rest }, ref) => {
    const id = useId();

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold text-[var(--text-h)]"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={id}
            className={`w-full rounded-lg border bg-transparent px-4 py-3 text-[var(--text-h)] outline-none transition-colors placeholder:text-[var(--text)] focus:border-[var(--accent)] ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-[var(--border)]"
            } ${endAdornment ? "pr-12" : ""} ${className}`}
            {...rest}
          />

          {endAdornment && (
            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-[var(--text)]">
              {endAdornment}
            </span>
          )}
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;