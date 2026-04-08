import type { JSX } from "react";

import type { ILabelProps } from "@/shared/components/label/interface";
import { LabelPresenter } from "@/shared/components/label/presenter";

const Label = ({ isAvailable }: ILabelProps): JSX.Element => {
  const { text, className } = LabelPresenter({ isAvailable });

  return <div className={className}>{text}</div>;
};

export default Label;
