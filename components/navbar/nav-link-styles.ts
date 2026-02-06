import { cva } from "class-variance-authority"

export const navLinkVariants = cva(
  "uppercase font-clash tracking-[-0.264px] text-center focus-visible:outline-2 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        default: "text-cream font-semibold focus-visible:outline-lime",
        mobile: "text-cream font-bold focus-visible:outline-lime",
        button: "text-charcoal font-bold bg-lime px-8 py-4 rounded-lg focus-visible:outline-charcoal",
        buttonLight: "text-charcoal font-bold bg-lime px-8 py-4 rounded-lg focus-visible:outline-cream",
      },
      size: {
        default: "text-xl lg:text-2xl",
        mobile: "text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
