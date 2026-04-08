import type { ReactNode } from "react";

import { StarShapes } from "@/widgets/components/sparke-effect/const";

interface ISparklePresenterReturn {
  x: number;
  y: number;
  size: number;
  color: string;

  shape: ReactNode;
}

const SparklePresenter = (): ISparklePresenterReturn => {
  const x = (Math.random() - 0.5) * 800;
  const y = (Math.random() - 0.5) * 800;

  const size = Math.random() * 30 + 8;
  const color = Math.random() > 0.5 ? "#FF0633" : "#FFFFFF";

  const shape = StarShapes[
    Math.floor(Math.random() * StarShapes.length)
  ] as ReactNode;

  return {
    x,
    y,
    size,
    color,
    shape,
  };
};

export { SparklePresenter };
