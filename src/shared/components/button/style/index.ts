import { EButtonVariants } from "@/shared/enum/button";

export const styles = {
  base: "flex gap-4 rounded-[40px] py-2 justify-center items-center uppercase font-semibold w-full font-alumni box-border border-[1px] border-transparent duration-[300ms] ease-in",
  variants: {
    [EButtonVariants.PRIMARY]:
      "bg-bg-secondary text-text-fill hover:bg-bg-primary hover:text-text-contrast hover:border-[1px] hover:border-border-contrast hover:shadow-none",
    [EButtonVariants.SECONDARY]:
      "bg-bg-accent text-text-contrast shadow-[0px_4px_4px_0px_#0000004D,0px_8px_12px_6px_#00000026] hover:bg-bg-primary hover:text-text-accent hover:border-[1px] hover:border-border-accent hover:shadow-none",
  },
};
