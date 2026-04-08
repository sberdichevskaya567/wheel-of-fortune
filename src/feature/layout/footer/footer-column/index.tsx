import type { JSX } from "react";

import HoverLink from "@/shared/components/hover-link";
import type { IArrayLinks } from "@/shared/interface/layout/footer";

interface IFooterColumnProps {
  title: string | JSX.Element;
  arrayLinks: IArrayLinks[];
}

const FooterColumn = ({
  title,
  arrayLinks,
}: IFooterColumnProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="uppercase text-text-additional-grey-primary">{title}</h3>
      <div className="flex flex-col">
        {arrayLinks.map((item, index) => {
          return (
            <HoverLink
              label={item.label}
              icon={item.icon}
              path={item.link}
              key={`${item.label}_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FooterColumn;
