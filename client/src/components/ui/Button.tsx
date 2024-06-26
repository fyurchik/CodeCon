import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import Loader from "./Loader";
import { cn } from "@/utils/utils";

// eslint-disable-next-line react-refresh/only-export-components
export const variants = cva(
    `
        inline-flex items-center justify-center gap-x-1.5 whitespace-nowrap rounded-md text-sm font-medium shadow-sm ring-offset-background
        transition
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        active:scale-[0.995]
        disabled:pointer-events-none disabled:opacity-50
    `,
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground ring-primary hover:bg-[#4AB240] transition duration-500",
                destructive: "bg-destructive text-destructive-foreground ring-destructive hover:bg-destructive/90 ",
                secondary:
                    "bg-secondary text-secondary-foreground ring-secondary-foreground hover:bg-secondary/80 hover:bg-[#E9EEE8] transition duration-500	",
                ghost: "shadow-none ring-accent-foreground hover:bg-accent hover:text-accent-foreground",
                link: "text-primary shadow-none ring-primary hover:text-primary/95 dark:text-slate-50 dark:ring-slate-50 dark:hover:text-slate-50/90",
                footer: "bg-secondary text-secondary-foreground ring-secondary-foreground hover:bg-secondary/80 hover:bg-[#EDF6EC] transition duration-500",
            },
            size: {
                default: "h-10 px-4 py-2 rounded-full",
                sm: "h-9 rounded-full px-3",
                lg: "h-11 rounded-full px-8",
                xl: "h-20 rounded-full px-10 text-2xl",
                link: "h-auto p-0 underline",
                icon: "size-10",
                floating: "fixed bottom-5 right-6 z-50 size-14 rounded-full sm:bottom-7 sm:right-10 lg:right-[80px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {
    loading?: boolean;
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, loading, disabled, size, children, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(variants({ variant, size, className }))}
                disabled={disabled ?? loading}
                {...props}
            >
                {!asChild ? (
                    <>
                        {loading && (
                            <Loader
                                className={`
                                    size-4
                                    ${
                                        variant === "ghost" || variant === "secondary" || variant === "link"
                                            ? "border-gray-900/50 dark:border-slate-50/60"
                                            : "border-slate-50"
                                    }
                                `}
                            />
                        )}
                        <span
                            className={cn("flex items-center justify-center gap-2 transition", {
                                "opacity-0": loading,
                                "opacity-100": !loading,
                            })}
                        >
                            {children}
                        </span>
                    </>
                ) : (
                    children
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export default Button;
