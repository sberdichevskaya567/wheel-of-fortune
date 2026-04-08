import type { JSX } from "react";
import { useState } from "react";

import Button from "@/shared/components/button";
import Label from "@/shared/components/label";
import { EButtonVariants } from "@/shared/enum/button";

interface IBlockActionProps {
  title: string;
  subText: string;
  buttonText: string;
  icon?: JSX.Element;
}

const BlockAction = ({
  title,
  subText,
  buttonText,
  icon,
}: IBlockActionProps): JSX.Element => {
  const [isAvailable, setIsAvailable] = useState<boolean>(true);

  const handleOnClick = (): void => {
    setIsAvailable(false);
  };

  return (
    <div className="relative border font-alumni">
      <Label isAvailable={isAvailable} />
      <div className="flex flex-col gap-2 mt-1">
        <h2>{title}</h2>
        <p className="tracking-[0.01em] whitespace-pre-line text-text-additional-grey-primary">
          {subText}
        </p>
      </div>
      <Button
        text={buttonText}
        icon={icon}
        variant={EButtonVariants.PRIMARY}
        className="mt-4"
        onClick={handleOnClick}
      />
    </div>
  );
};

export default BlockAction;
