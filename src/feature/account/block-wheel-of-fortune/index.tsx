import type { JSX } from "react";

import { BlockWheelOfFortunePresenter } from "@/feature/account/block-wheel-of-fortune/presenter";
import DaysProgress from "@/feature/account/days-progress";
import ModalSpinResult from "@/feature/modals/spain-result";
import { WheelImage } from "@/shared/assets/image";
import SwiperBlock from "@/widgets/account/swiper-block";
import TimerBlock from "@/widgets/account/timer-block";
import SparklesEffect from "@/widgets/components/sparke-effect";

const BlockWheelOfFortune = (): JSX.Element => {
  const {
    offset,
    currentDay,
    hours,
    minutes,
    seconds,
    isSpinCurrentDay,
    isModalOpen,
    isSpinning,
    isSparkActive,
    extendedItems,
    resultItem,
    containerRef,
    viewportRef,
    iconRef,
    spin,
    handleCloseModal,
  } = BlockWheelOfFortunePresenter();

  return (
    <>
      <div className="flex flex-col gap-4 w-full border pt-6">
        <div className="flex justify-between">
          <div className="font-alumni">
            <h2>Колесо Фортуны</h2>
            <p className="whitespace-pre-line text-text-additional-grey-primary">
              {`Испытайте удачу раз в день\nи выигрывайте бонусы для VPN!`}
            </p>
          </div>
          <div ref={iconRef}>
            <WheelImage />
          </div>
          <SparklesEffect trigger={isSparkActive} originRef={iconRef} />
        </div>
        {isSpinCurrentDay ? (
          <TimerBlock hours={hours} minutes={minutes} seconds={seconds} />
        ) : (
          <SwiperBlock
            viewportRef={viewportRef}
            containerRef={containerRef}
            offset={offset}
            isSpinning={isSpinning}
            extendedItems={extendedItems}
            spin={spin}
          />
        )}
        <span className="whitespace-pre-line font-alumni">
          {`Крути колесо 7 дней подряд без пропусков и получи на 7-й день\nгарантированный 1 день подписки!`}
        </span>
        <DaysProgress currentDay={currentDay} />
      </div>
      {resultItem && (
        <ModalSpinResult
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          description={resultItem?.description}
          image={resultItem.image}
          subText={resultItem.subText}
          title={resultItem.title}
          type={resultItem.type}
        />
      )}
    </>
  );
};

export default BlockWheelOfFortune;
