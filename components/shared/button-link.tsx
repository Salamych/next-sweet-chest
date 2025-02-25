import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  text: string;
  isProductItem?: boolean;
  isStandart?: boolean;
  className?: string;
}

export const ButtonLink: React.FC<Props> = ({
  url,
  text,
  isProductItem = false,
  isStandart = true,
  className,
}) => {
  return (
    <Link href={url}>
      <button
        className={cn(
          "text-[#2e363e] text-lg font-medium bg-[#fed84c] rounded-lg hover:bg-[#2e363e] hover:text-white duration-300 scale-100 hover:scale-105",
          {
            "py-[30px] px-[50px]": isStandart,
            "py-5 px-10": isProductItem
          },
          className
        )}
      >
        {text}
      </button>
    </Link>
  );
};