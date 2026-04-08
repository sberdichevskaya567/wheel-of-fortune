import {
  AndroidIcon,
  AndroidTvIcon,
  AppStoreIcon,
  BankCardIcon,
  CryptocurrencyIcon,
  LinuxIcon,
  MacOSIcon,
  SberPayIcon,
  SbpIcon,
  TinkoffPayIcon,
  WindowsIcon,
} from "@/shared/assets/icons";
import type { IFooterColumnItem } from "@/shared/interface/layout/footer";

const CompanyLinks = [
  { label: "FAQ", link: "/" },
  { label: "Тарифы", link: "/" },
  { label: "Блог", link: "/" },
  { label: "Роутеры", link: "/" },
  { label: "Партнерам", link: "/" },
  { label: "Аккаунт", link: "/" },
] as IFooterColumnItem[];

const DownloadLinks = [
  { label: "IOS", icon: <AppStoreIcon />, link: "/" },
  { label: "Android", icon: <AndroidIcon />, link: "/" },
  { label: "Android TV", icon: <AndroidTvIcon />, link: "/" },
  { label: "Windows", icon: <WindowsIcon />, link: "/" },
  { label: "Mas Os", icon: <MacOSIcon />, link: "/" },
  { label: "Linux", icon: <LinuxIcon />, link: "/" },
] as IFooterColumnItem[];

const PaymentMethods = [
  { label: "СБП", icon: <SbpIcon />, link: "/" },
  { label: "Sberpay", icon: <SberPayIcon />, link: "/" },
  { label: "Tinkoff Pay", icon: <TinkoffPayIcon />, link: "/" },
  { label: "Банковская карта", icon: <BankCardIcon />, link: "/" },
  { label: "Криптовалюта", icon: <CryptocurrencyIcon />, link: "/" },
] as IFooterColumnItem[];

export { CompanyLinks, DownloadLinks, PaymentMethods };
