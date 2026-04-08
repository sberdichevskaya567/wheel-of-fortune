import type { JSX } from "react";

interface IArrayLinks {
  label: string;
  link: string;
  icon?: JSX.Element;
}

interface IFooterColumnItem {
  label: string;
  link: string;
  icon?: JSX.Element;
}

export type { IArrayLinks, IFooterColumnItem };
