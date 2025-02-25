import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  className?: string;
}

export const BageGray: React.FC<Props> = ({text, className}) => {
  return (
    <span className={cn("text-[#2E363E] uppercase text-xs bg-[#f2f6fa] inline-block py-[10px] px-[18px] rounded-[5px]", className)}>
      {text}
    </span>
  );
}