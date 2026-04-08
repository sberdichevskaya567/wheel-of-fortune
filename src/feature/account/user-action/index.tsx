import type { JSX } from "react";

import BlockAction from "@/feature/account/block-action";
import { ActionData } from "@/widgets/user-action/const";

const UserActions = (): JSX.Element => {
  return (
    <div className="grid grid-cols-3 gap-6 items-start mr-[33px] mb-10 max-laptop:mr-0 max-laptop:grid-cols-2 max-tablet:grid-cols-1">
      {ActionData.map((item, index) => {
        return (
          <BlockAction
            key={`${item.title}-${index}`}
            title={item.title}
            subText={item.subText}
            buttonText={item.buttonText}
            icon={item?.icon}
          />
        );
      })}
    </div>
  );
};

export default UserActions;
