import { useRef, useState } from "react";

interface IHoverLinkPresenterReturn {
  active: boolean;

  handleEnter(): void;
  handleLeave(): void;
  handleClick(): void;
}

const HoverLinkPresenter = (): IHoverLinkPresenterReturn => {
  const [active, setActive] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  const handleEnter = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActive(true);
  };

  const handleLeave = (): void => {
    timeoutRef.current = window.setTimeout(() => {
      setActive(false);
    }, 300);
  };

  const handleClick = (): void => {
    setActive(false);
  };

  return { active, handleEnter, handleLeave, handleClick };
};

export { HoverLinkPresenter };
