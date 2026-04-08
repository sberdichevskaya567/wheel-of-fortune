import type { JSX } from "react";

import type { IButtonProps } from "@/shared/components/button/interface";
import { styles } from "@/shared/components/button/style";
import { EButtonVariants } from "@/shared/enum/button";

const Button = ({
  text,
  icon,
  variant = EButtonVariants.PRIMARY,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={`group ${styles.base} ${styles.variants[variant]} ${className}`}
      {...props}
    >
      <span className="!text-[24px] !leading-[24px]">{text}</span>
      {icon && <div>{icon}</div>}
    </button>
  );
};

export default Button;
