import type { JSX } from "react";

import { useRenderDigits } from "@/shared/utils/render-digits";

interface ITimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const TimerBlock = ({ hours, minutes, seconds }: ITimerProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1 items-center">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">{useRenderDigits({ value: hours })}</div>
          <p className="font-alumni flex justify-center">Часы</p>
        </div>
        <span className="flex items-start h-10">:</span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {useRenderDigits({ value: minutes })}
          </div>
          <p className="font-alumni flex justify-center">Минуты</p>
        </div>
        <span className="flex items-start h-10">:</span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {useRenderDigits({ value: seconds })}
          </div>
          <p className="font-alumni flex justify-center">Секунды</p>
        </div>
      </div>
      <div className="flex justify-around"></div>
    </div>
  );
};

export default TimerBlock;
