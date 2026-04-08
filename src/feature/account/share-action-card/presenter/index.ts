import { useState } from "react";

interface IShareActionCardPresenter {
  isAvailable: boolean;
  handleOnClick(): void;
}

const ShareActionCardPresenter = (): IShareActionCardPresenter => {
  const [isAvailable, setIsAvailable] = useState(true);

  const handleOnClick = () => {
    setIsAvailable(false);
  };

  return { isAvailable, handleOnClick };
};

export { ShareActionCardPresenter };
