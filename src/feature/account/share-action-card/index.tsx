import type { JSX } from "react";

import { ShareActionCardPresenter } from "@/feature/account/share-action-card/presenter";
import Button from "@/shared/components/button";
import Label from "@/shared/components/label";
import { EButtonVariants } from "@/shared/enum/button";

const ShareActionCard = (): JSX.Element => {
  const { isAvailable, handleOnClick } = ShareActionCardPresenter();
  return (
    <div className="relative flex flex-col gap-4 font-alumni bg-bg-secondary text-text-fill p-6 ">
      <div className=" flex flex-col gap-2">
        <Label isAvailable={isAvailable} />
        <h2 className="mt-1">Расскажи о Hiro</h2>
        <span className="whitespace-pre-line">
          {`Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас.\nПришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно!\nЧем больше охват, тем длиннее подарок!`}
        </span>
      </div>
      <Button
        text="Отправить ссылки"
        variant={EButtonVariants.SECONDARY}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default ShareActionCard;
