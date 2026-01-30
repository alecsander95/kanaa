import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        default: "bg-[#f2f0ea] text-[#a59973] hover:bg-[#E3DFD4] hover:text-[#7C7356]",
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
        default: "h-auto py-[14px] pl-[24px] pr-[14px] text-base",
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
                return "bg-white text-[#a59973] group-hover:bg-[#A59973]"
        }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), withArrow ? "pl-[24px] pr-[14px] justify-between gap-3" : "")}
        ref={ref}
        {...props}
      >
        <span className="font-bold">{children}</span>
        {withArrow && (
            <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300", getArrowStyles())}>
                <ArrowRight strokeWidth={3} className="h-4 w-4 group-hover:text-[#F6F5F1] group-hover:-rotate-30 group-hover:translate-x-0.5 transition-all duration-300" />
            </div>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
