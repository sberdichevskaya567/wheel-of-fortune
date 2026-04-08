import { useEffect } from "react";

import Button from "@/shared/components/button";
import { EButtonVariants } from "@/shared/enum/button";
import type { IModalProps } from "@/shared/interface/modal";

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-bg-primary text-text-contrast w-[476px] py-8 px-6 font-alumni rounded-[28px] max-tablet:w-[343px] max-tablet:py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center gap-6 text-center">
            {children}
          </div>
          <Button
            onClick={onClose}
            text={"Продолжить"}
            variant={EButtonVariants.SECONDARY}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
