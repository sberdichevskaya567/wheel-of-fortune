import type { JSX } from "react";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element[];
}

export type { IModalProps };
