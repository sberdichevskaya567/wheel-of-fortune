import type { JSX } from "react";

interface IUseRenderDigitsProps {
  value: number;
}

export const useRenderDigits = ({
  value,
}: IUseRenderDigitsProps): JSX.Element => {
  const digits = value.toString().padStart(2, "0").split("");

  return (
    <>
      {digits.map((digit, index) => (
        <div
          key={index}
          className="!p-2 w-10 h-15 border !rounded-[4px] flex items-center justify-center text-[44px]"
        >
          {digit}
        </div>
      ))}
    </>
  );
};
