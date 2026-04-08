import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

import { ONE_DAY, ZERO } from "@/shared/const";
import type { IWheelOfFortuneItem } from "@/shared/interface/wheel-of-fortune";
import { useFormatTime } from "@/shared/utils/format-time";
import { PrizeItems } from "@/widgets/wheel-of-fortune/const";

const ITEM_WIDTH = 120;
const STEP = ITEM_WIDTH + 4;

interface IBlockWheelOfFortunePresenterReturn {
  offset: number;
  currentDay: number;
  hours: number;
  minutes: number;
  seconds: number;

  isSpinCurrentDay: boolean;
  isModalOpen: boolean;
  isSpinning: boolean;
  isSparkActive: boolean;

  extendedItems: IWheelOfFortuneItem[];
  resultItem: IWheelOfFortuneItem | null;

  containerRef: RefObject<HTMLDivElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  iconRef: RefObject<HTMLDivElement | null>;

  spin(): void;
  handleCloseModal(): void;
}

const BlockWheelOfFortunePresenter =
  (): IBlockWheelOfFortunePresenterReturn => {
    const savedDaySpin = localStorage.getItem("currentDay");
    const savedEndTime = localStorage.getItem("spinEndTime");
    const lastSpin = localStorage.getItem("lastSpinTime");

    const [currentDay, setCurrentDay] = useState<number>(
      savedDaySpin ? Number(savedDaySpin) : ZERO,
    );
    const [endTime, setEndTime] = useState<number | null>(
      savedEndTime ? Number(savedEndTime) : null,
    );
    const [lastSpinTime, setLastSpinTime] = useState<number | null>(
      lastSpin ? Number(lastSpin) : null,
    );

    const [isSparkActive, setIsSparkActive] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(ZERO);
    const [isSpinning, setIsSpinning] = useState<boolean>(false);
    const [resultItem, setResultItem] = useState<IWheelOfFortuneItem | null>(
      null,
    );

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [timeLeft, setTimeLeft] = useState<null | number>(
      endTime ? endTime - Date.now() : ZERO,
    );
    const isSpinCurrentDay = !!endTime && Date.now() < endTime;

    const viewportRef = useRef<HTMLDivElement | null>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const iconRef = useRef<HTMLDivElement | null>(null);
    const extendedItems: IWheelOfFortuneItem[] = Array(20)
      .fill(PrizeItems)
      .flat();

    const { hours, minutes, seconds } = useFormatTime({ time: timeLeft });

    const [centerOffset, setCenterOffset] = useState(0);

    const [margin, setMargin] = useState(0);

    useEffect(() => {
      if (!viewportRef.current) return;

      const update = () => {
        if (!containerRef.current) return;

        const el = viewportRef.current;
        if (!el) return;

        const width = el.offsetWidth;
        setCenterOffset(width / 2 - ITEM_WIDTH / 2);
      };

      update();

      const observer = new ResizeObserver(update);
      observer.observe(viewportRef.current);

      return () => observer.disconnect();
    }, [isSpinCurrentDay]);

    useEffect(() => {
      if (!containerRef.current) return;

      const update = () => {
        if (!containerRef.current) return;

        const styles = getComputedStyle(containerRef.current);
        const ml = Math.abs(parseFloat(styles.marginLeft));
        setMargin(ml);
      };

      update();

      const observer = new ResizeObserver(update);
      observer.observe(containerRef.current);

      return () => observer.disconnect();
    }, [isSpinCurrentDay]);

    const spin = (): void => {
      if (isSpinning || isSpinCurrentDay) return;

      setIsSpinning(true);

      const extraSpins = 5 * PrizeItems.length;
      const randomIndex = Math.floor(Math.random() * PrizeItems.length);

      const spinDistance = extraSpins * STEP + randomIndex * STEP;

      const newOffset = offset + spinDistance;

      const alignedOffset =
        Math.round((newOffset + centerOffset + margin) / STEP) * STEP -
        centerOffset -
        margin;

      setOffset(alignedOffset);

      setTimeout(() => {
        setIsSparkActive(true);

        const landedIndex =
          Math.round((alignedOffset + centerOffset + margin) / STEP) %
          PrizeItems.length;

        const finalItem =
          PrizeItems[(landedIndex + PrizeItems.length) % PrizeItems.length];

        setCurrentIndex(landedIndex);
        setResultItem(finalItem);

        setTimeout(() => {
          setIsModalOpen(true);

          const now = Date.now();
          const newEndTime = Date.now() + ONE_DAY;

          setEndTime(newEndTime);
          setLastSpinTime(now);

          localStorage.setItem("lastSpinTime", String(now));
          localStorage.setItem("spinEndTime", String(newEndTime));
        }, 1000);
      }, 3000);
    };

    const handleCloseModal = (): void => {
      setIsModalOpen(false);
      setIsSpinning(false);
      setIsSparkActive(false);
      const normalizedIndex =
        ((currentIndex % PrizeItems.length) + PrizeItems.length) %
        PrizeItems.length;

      const newOffset = normalizedIndex * STEP - centerOffset - margin;

      if (containerRef.current) {
        containerRef.current.style.transition = "none";
        setOffset(newOffset);

        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = "";
          }
        });
      }

      setCurrentDay((prev) => {
        const next = prev >= 7 ? 1 : prev + 1;
        localStorage.setItem("currentDay", String(next));
        return next;
      });
    };

    useEffect(() => {
      const interval = setInterval(() => {
        const now = Date.now();

        if (endTime) {
          const remaining = endTime - now;
          setTimeLeft(Math.max(0, remaining));

          if (remaining <= 0) {
            setTimeLeft(null);
            localStorage.removeItem("spinEndTime");
          }
        }

        if (lastSpinTime) {
          const diff = now - lastSpinTime;

          if (diff > ONE_DAY * 2) {
            setCurrentDay(0);
            localStorage.setItem("currentDay", "0");
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [endTime, lastSpinTime]);

    return {
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
    };
  };

export { BlockWheelOfFortunePresenter };
