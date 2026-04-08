import type { JSX } from "react";

import FooterColumn from "@/feature/layout/footer/footer-column";
import { TelegramIcon } from "@/shared/assets/icons";
import HoverLink from "@/shared/components/hover-link";
import Logo from "@/shared/components/layout/logo";
import {
  CompanyLinks,
  DownloadLinks,
  PaymentMethods,
} from "@/widgets/components/layout/const";

const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 border-t-[2px] border-x-[2px] rounded-t-lg border-border-additional-grey-secondary pt-10 pb-6">
      <div className="px-6 justify-between flex gap-12 max-tablet:flex-col">
        <div>
          <FooterColumn
            title={<Logo textSize={24} subTextSize={9.82} />}
            arrayLinks={CompanyLinks}
          />
        </div>
        <div>
          <FooterColumn title={"Скачать"} arrayLinks={DownloadLinks} />
        </div>
        <div>
          <FooterColumn title={"Способы оплаты"} arrayLinks={PaymentMethods} />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="uppercase text-text-additional-grey-primary">
            Поддержка 24/7
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 w-[152px] h-12 text-text-fill rounded-[40px] bg-bg-secondary px-4 py-[14px] hover:bg-bg-primary hover:text-text-contrast hover:border-[1px] hover:border-border-contrast duration-[300ms] ease-in box-border border-[1px]">
              <p className=" leading-5 ">Telegram</p>
              <TelegramIcon
                className={
                  "text-text-accent group-hover:text-text-contrast duration-[300ms] ease-in "
                }
              />
            </div>
            <div>
              <HoverLink label="Публичная оферта" path={"/"} />
              <HoverLink label="Пользовательское соглашение" path={"/"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t-[1px] border-border-additional-grey-secondary pt-6">
        <p className="text-text-additional-grey-primary font-alumni max-tablet:max-w-[220px] text-center">
          © 2025 Wolle Development Limited. Все права защищены.
        </p>
      </div>
    </div>
  );
};

export default Footer;
