import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

import type { IOptionDropDown } from "@/shared/components/drop-down/interface";
import { Language } from "@/widgets/components/drop-down/const";

interface IDropDownPresenterReturn {
  isOpen: boolean;
  selected: IOptionDropDown;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleSelect(lang: IOptionDropDown): void;
}

const DropDownPresenter = (): IDropDownPresenterReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<IOptionDropDown>(Language[0]);

  const handleSelect = (lang: IOptionDropDown): void => {
    setSelected(lang);
    setIsOpen(false);
  };

  return {
    isOpen,
    selected,
    setIsOpen,
    handleSelect,
  };
};

export { DropDownPresenter };
