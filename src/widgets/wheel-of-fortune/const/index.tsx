import { BoxBlue, BoxRed, Star } from "@/shared/assets/image";
import { ETypeCard } from "@/shared/enum/card";
import type { IWheelOfFortuneItem } from "@/shared/interface/wheel-of-fortune";

const PrizeItems = [
  {
    title: "Скидка",
    image: <BoxRed />,
    subText: "70%",
    type: ETypeCard.sale,
    description: "Активируйте в течение 24 часов",
  },
  {
    title: "Скидка",
    image: <BoxRed />,
    subText: "50%",
    type: ETypeCard.sale,
    description: "Активируйте в течение 24 часов",
  },
  {
    title: "Скидка",
    image: <BoxRed />,
    subText: "30%",
    type: ETypeCard.sale,
    description: "Активируйте в течение 24 часов",
  },
  {
    title: "Скидка",
    image: <BoxRed />,
    subText: "20%",
    type: ETypeCard.sale,
    description: "Активируйте в течение 24 часов",
  },
  {
    title: "Скидка",
    image: <BoxRed />,
    subText: "10%",
    type: ETypeCard.sale,
    description: "Активируйте в течение 24 часов",
  },
  {
    title: "Скидка",
    image: <BoxRed />,
    subText: "5%",
    type: ETypeCard.sale,
    description: "Активируйте в течение 24 часов",
  },
  {
    title: "Бесплатные",
    image: <BoxBlue />,
    subText: "6 часов",
    type: ETypeCard.free,
    description: "Они уже добавлены к вашей подписке",
  },
  {
    title: "Попробуй",
    image: <Star />,
    subText: "Завтра",
    type: ETypeCard.loss,
  },
] as IWheelOfFortuneItem[];

export { PrizeItems };
