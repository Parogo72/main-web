import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold text-center",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      usm: "text-2xl lg:text-2xl",
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full text-center",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const paragraph = tv({
  base: "text-base leading-relaxed text-default-700 text-left",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    color: {
      gray: "text-gray-700",
      red: "text-red-700",
      blue: "text-blue-700",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const smallText = tv({
  base: "text-sm leading-snug text-default-500",
  variants: {
    color: {
      gray: "text-gray-500",
      red: "text-red-500",
      blue: "text-blue-500",
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

export const caption = tv({
  base: "text-xs leading-tight text-default-400",
  variants: {
    color: {
      gray: "text-gray-400",
      red: "text-red-400",
      blue: "text-blue-400",
    },
  },
  defaultVariants: {
    color: "gray",
  },
});
