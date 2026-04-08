import type { JSX } from "react";

import BlockWheelOfFortune from "@/feature/account/block-wheel-of-fortune";
import ShareActionCard from "@/feature/account/share-action-card";
import UserActions from "@/feature/account/user-action";
import { CrossIcon } from "@/shared/assets/icons";

const AccountPage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-[64px] flex justify-center uppercase">Аккаунт</div>
      <div className="flex justify-between">
        <h1>Квесты</h1>
        <CrossIcon />
      </div>
      <div className="flex gap-6 items-center w-full max-tablet:flex-col">
        <div className="flex-1 min-w-0 max-laptop:w-[576px] max-laptop:flex-none max-laptop-s:w-[452px] laptop-s:w-[452px] max-tablet-l:w-[348px] max-tablet-mobile:w-[343px]">
          <BlockWheelOfFortune />
        </div>
        <div className="flex-1 min-w-0 max-tablet:flex-none max-tablet:w-full">
          <ShareActionCard />
        </div>
      </div>
      <div>
        <UserActions />
      </div>
    </div>
  );
};

export default AccountPage;
