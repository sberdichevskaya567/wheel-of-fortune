import { GooglePlayIcon, ShareIcon, TelegramIcon } from "@/shared/assets/icons";
import type { IUserActionItem } from "@/shared/interface/user-action";

const ActionData = [
  {
    title: "Оставь отзыв",
    subText:
      "Поделитесь своим мнением о HiroVPN\nи получите 3 дня VPN бесплатно!",
    buttonText: "Оставить отзыв",
  },
  {
    title: "Поделиться с Друзьями",
    subText: "Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!",
    buttonText: "поделиться",
    icon: (
      <ShareIcon
        className={
          "text-text-accent group-hover:text-text-contrast duration-[300ms] ease-in"
        }
      />
    ),
  },
  {
    title: "Поддержите нас лайками",
    subText:
      "Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!",
    buttonText: "Поддержать",
    icon: (
      <GooglePlayIcon
        className={
          "text-text-accent group-hover:text-text-contrast duration-[300ms] ease-in"
        }
      />
    ),
  },
  {
    title: "Оцени нас в Google Картах",
    subText: "Поделись впечатлением и получи 1 день VPN\nв подарок!",
    buttonText: "Оценить",
  },
  {
    title: "Оцени нас в ЯНДЕКС Картах",
    subText: "Поделись впечатлением и получи 1 день VPN\nв подарок!",
    buttonText: "Оценить",
  },
  {
    title: "Подписаться на TG-канал ",
    subText:
      "Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!",
    buttonText: "Подписаться",
    icon: (
      <TelegramIcon
        className={
          "text-text-accent group-hover:text-text-contrast duration-[300ms] ease-in"
        }
      />
    ),
  },
] as IUserActionItem[];

export { ActionData };
