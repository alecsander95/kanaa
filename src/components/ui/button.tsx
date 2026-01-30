import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-green-normal text-white hover:bg-green-normal-hover",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-gold-normal text-white hover:bg-gold-normal-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        beige: "bg-[#F5F2EB] text-[#594D3C] hover:bg-[#Ebe5D9]",
        "beige-dark": "bg-[#E0D9CA] text-[#594D3C] hover:bg-[#D1C9B8]",
        white: "bg-white text-green-darker hover:bg-gray-100",
      },
      size: {
        default: "h-14 px-8 py-2 text-base",
        sm: "h-10 px-4 text-sm",
        lg: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  withArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, withArrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const getArrowStyles = () => {
        switch(variant) {
            case 'beige':
                return "bg-white text-[#594D3C]"
            case 'beige-dark':
                return "bg-[#8C7B65] text-white"
            case 'white':
                return "bg-green-normal text-white"
            case 'outline':
                return "bg-green-normal text-white"
            case 'secondary':
                return "bg-white text-gold-normal"
            case 'default':
            default:
                return "bg-white text-green-normal"
        }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), withArrow ? "pl-8 pr-2 justify-between gap-4" : "")}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
            <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform group-hover:translate-x-1", getArrowStyles())}>
                <ArrowRight className="h-5 w-5" />
            </div>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
