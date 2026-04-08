import type { JSX } from "react";
import type { ButtonHTMLAttributes } from "react";

import type { EButtonVariants } from "@/shared/enum/button";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
  variant?: EButtonVariants;
}

export type { IButtonProps };
