import React from "react";
import { IButton } from "../../interface/IButton";

export default function Button({
  className,
  type,
  children,
  onClick,
}: IButton) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
