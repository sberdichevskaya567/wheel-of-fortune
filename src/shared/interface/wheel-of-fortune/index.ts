import type { JSX } from "react";

import { ETypeCard } from "@/shared/enum/card";

interface IWheelOfFortuneItem {
  title: string;
  image: JSX.Element;
  subText: string;
  description?: string;
  type: ETypeCard;
}

export type { IWheelOfFortuneItem };
