import type { JSX } from "react";

import { PresentIcon } from "@/shared/assets/icons";
import { BoxRedAndBlue } from "@/shared/assets/image";
import Button from "@/shared/components/button";
import { EButtonVariants } from "@/shared/enum/button";

interface IDaysProgressProps {
  currentDay: number;
}

const DaysProgress = ({ currentDay }: IDaysProgressProps): JSX.Element => {
  return (
    <>
      <div className="relative flex border justify-around w-full items-center !py-2 font-alumni">
        <div
          className="absolute left-0 top-1/2 h-4 bg-bg-accent -translate-y-1/2 transition-all duration-500 ease-out"
          style={{
            width: `${(currentDay / 7) * 100}%`,
          }}
        />

        {Array.from({ length: 7 }, (_, i) => {
          const isLast = i === 6;
          return (
            <div
              key={i}
              className={`relative flex items-center justify-center`}
            >
              {isLast && (
                <div className="absolute flex items-center justify-center z-0">
                  <BoxRedAndBlue />
                </div>
              )}
              <span className="font-semibold !text-[44px] !leading-[44px] z-10">
                {i + 1}
              </span>
            </div>
          );
        })}
      </div>
      {currentDay === 7 && (
        <Button
          text="Забрать награду"
          variant={EButtonVariants.PRIMARY}
          icon={<PresentIcon />}
        />
      )}
    </>
  );
};

export default DaysProgress;
