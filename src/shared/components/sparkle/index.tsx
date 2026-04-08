import "./style/index.css";

import type { CSSProperties } from "react";

import { SparklePresenter } from "@/shared/components/sparkle/presenter";

const Sparkle = ({
  originX,
  originY,
}: {
  originX: number;
  originY: number;
}) => {
  const { x, y, size, color, shape } = SparklePresenter();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className="absolute"
      style={
        {
          left: originX,
          top: originY,
          fill: color,
          transform: "translate(-50%, -50%)",
          animation: "sparkle 3s ease-out forwards",
          "--x": `${x}px`,
          "--y": `${y}px`,
        } as CSSProperties
      }
    >
      {shape}
    </svg>
  );
};

export default Sparkle;
