import type { JSX } from "react";
import { NavLink } from "react-router-dom";

import { HoverLinkPresenter } from "@/shared/components/hover-link/presrnter";

interface IHoverLinkProps {
  label: string;
  icon?: JSX.Element;
  path: string;
}

const HoverLink = ({ label, icon, path }: IHoverLinkProps): JSX.Element => {
  const { active, handleEnter, handleClick, handleLeave } =
    HoverLinkPresenter();
  return (
    <NavLink to={path}>
      {() => {
        const isActive = path === "/account";
        const className = isActive
          ? "py-[14px] px-[47.25px] rounded-[40px] border-[1px] border-border-contrast"
          : `${
              active
                ? "text-text-accent duration-[300ms] ease-out"
                : " duration-[300ms] ease-in"
            }`;

        return (
          <div
            className={`flex gap-4 py-3 items-center ${className}`}
            onMouseEnter={!isActive ? handleEnter : undefined}
            onMouseLeave={!isActive ? handleLeave : undefined}
            onClick={handleClick}
          >
            {icon && <span>{icon}</span>}
            <span>{label}</span>
          </div>
        );
      }}
    </NavLink>
  );
};

export default HoverLink;
