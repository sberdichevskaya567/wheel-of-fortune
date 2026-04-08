import { useMemo } from "react";

import type { ILabelProps } from "@/shared/components/label/interface";

interface ILabelPresenterReturn {
  text: string;
  className: string;
}

const LabelPresenter = ({
  isAvailable,
}: ILabelProps): ILabelPresenterReturn => {
  const text = useMemo(
    () => (isAvailable ? "Доступен" : "Выполнен"),
    [isAvailable],
  );
  const className = `absolute left-6 top-0 px-2 py-[2px] text-[20px] leading-[20px] w-fit ${isAvailable ? "bg-bg-accent text-text-contrast shadow-[0px_4px_4px_0px_#0000004D,0px_8px_12px_6px_#00000026]" : "text-text-fill bg-bg-secondary"}`;

  return {
    text,
    className,
  };
};

export { LabelPresenter };
