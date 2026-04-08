import type { JSX } from "react";
import type { RefObject } from "react";

import { PresentIcon } from "@/shared/assets/icons";
import Button from "@/shared/components/button";
import { EButtonVariants } from "@/shared/enum/button";
import type { IWheelOfFortuneItem } from "@/shared/interface/wheel-of-fortune";

interface ISwiperBlockProps {
  offset: number;
  isSpinning: boolean;

  extendedItems: IWheelOfFortuneItem[];

  containerRef: RefObject<HTMLDivElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;

  spin(): void;
}

const SwiperBlock = ({
  viewportRef,
  containerRef,
  offset,
  isSpinning,
  extendedItems,
  spin,
}: ISwiperBlockProps): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden -mx-6" ref={viewportRef}>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120px] h-full box-border border !border-border-accent z-10" />
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-6 h-6 z-10 bg-bg-accent rounded-t-md"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        <div
          ref={containerRef}
          className="flex gap-1 -ml-[20px] max-laptop:-ml-[82px] max-tablet-l:-ml-[10px]"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: isSpinning
              ? "transform 3s cubic-bezier(0.1, 0.7, 0.1, 1)"
              : "none",
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              className="flex flex-col items-center w-[120px] border !px-0 !py-4 text-text-additional-grey-primary"
              key={`${item.title}_${index}`}
            >
              <span className="uppercase !text-[24px] font-alumni font-semibold">
                {item.title}
              </span>
              {item.image}
              <p className="!text-[32px]">{item.subText}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={spin}
        text="Испытать удачу"
        variant={EButtonVariants.SECONDARY}
        icon={<PresentIcon />}
        disabled={isSpinning}
      />
    </>
  );
};

export default SwiperBlock;
