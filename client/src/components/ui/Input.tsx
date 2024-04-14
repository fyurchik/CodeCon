import { forwardRef } from "react";
import { cn } from "@/utils/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
    <input
        type={type}
        className={cn(
            "file:border-1 flex h-16 w-full gap-2.5 rounded-full border border-[#D4D4D4] border-border bg-[#F5F5F5] bg-background px-3 py-2 text-sm ring-offset-background transition file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        ref={ref}
        {...props}
    />
));
Input.displayName = "Input";

export default Input;
