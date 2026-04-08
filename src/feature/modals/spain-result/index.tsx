import type { JSX, ReactNode } from "react";

import Modal from "@/shared/components/modal";
import { ETypeCard } from "@/shared/enum/card";

interface IModalSpinResultProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subText: string;
  image: ReactNode;
  description?: string;
  type: ETypeCard;
}

const ModalSpinResult = ({
  isOpen,
  onClose,
  title,
  subText,
  image,
  description,
  type,
}: IModalSpinResultProps): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="whitespace-pre-wrap text-center">
        {type === ETypeCard.loss
          ? `В другой раз\nповезёт!`
          : `Поздравляем!\nВы выиграли`}
      </h2>
      <div className="flex !text-[24px] items-center">
        <p className="uppercase !text-[24px] !leading-[24px] font-semibold">
          {title}
        </p>
        {image}
        <p className="font-kelly !text-[32px]">{subText}</p>
      </div>
      <span className="!text-[24px] !leading-[24px] font-semibold">
        {description}
      </span>
    </Modal>
  );
};

export default ModalSpinResult;
