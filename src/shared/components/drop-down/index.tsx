import type { JSX } from "react";

import { ArrowBottom } from "@/shared/assets/icons";
import { DropDownPresenter } from "@/shared/components/drop-down/presenter";
import { Language } from "@/widgets/components/drop-down/const";

const DropDownLang = (): JSX.Element => {
  const { isOpen, selected, setIsOpen, handleSelect } = DropDownPresenter();
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-4"
      >
        <span>{selected.label}</span>
        <ArrowBottom />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-6 min-w-full w-max border-[1px] border-border-contrast rounded-xl z-50 p-6 flex flex-col gap-4">
          {Language.map((lang) => {
            const isActive = lang.value === selected.value;
            return (
              <div
                key={lang.value}
                onClick={() => handleSelect(lang)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-xl active:bg-bg-secondary font-semibold ${isActive ? "text-text-fill bg-bg-secondary" : "hover:bg-bg-secondary hover:text-text-fill"}`}
              >
                <span>{lang.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDownLang;
