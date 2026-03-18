import { cva } from "class-variance-authority"

export const navLinkVariants = cva(
  "uppercase font-clash tracking-[-0.264px] text-center focus-visible:outline-2 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        default: "text-cream font-[550] focus-visible:outline-lime",
        mobile: "text-cream font-[550] focus-visible:outline-lime",
        button: "text-charcoal font-[550] bg-lime px-8 py-4 rounded-lg focus-visible:outline-charcoal",
        buttonLight: "text-charcoal font-[550] bg-lime px-8 py-4 rounded-lg focus-visible:outline-cream",
      },
      size: {
        default: "text-xl lg:text-xl",
        mobile: "text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
