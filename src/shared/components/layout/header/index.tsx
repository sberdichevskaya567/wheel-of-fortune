import type { JSX } from "react";

import { MenuMobileIcon } from "@/shared/assets/icons";
import Button from "@/shared/components/button";
import DropDownLang from "@/shared/components/drop-down";
import HoverLink from "@/shared/components/hover-link";
import Logo from "@/shared/components/layout/logo";
import { EButtonVariants } from "@/shared/enum/button";

const Header = (): JSX.Element => {
  return (
    <div className="flex gap-4 py-4 w-full justify-between items-center">
      <div className="hidden max-laptop:flex">
        <MenuMobileIcon />
      </div>
      <div className="items-center mt-4">
        <Logo textSize={44} subTextSize={18} color={"#FDFDFD"} />
      </div>
      <div className="flex justify-around items-center w-full max-laptop:hidden">
        <HoverLink label="FAQ" path="/" />
        <HoverLink label="Тарифы" path="/" />

        <div className="flex min-w-[176px] items-center">
          <Button text="Скачать" variant={EButtonVariants.SECONDARY} />
        </div>

        <HoverLink label="Блог" path="/" />
        <HoverLink label="Аккаунт" path="/account" />
      </div>
      <DropDownLang />
    </div>
  );
};

export default Header;
