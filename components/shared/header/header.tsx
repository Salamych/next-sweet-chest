import { cn } from "@/lib/utils";
import React from "react";
import { HeaderTitle } from "./header-title";
import { HeaderContent } from "./header-content";
import { HeaderDecorateImages } from "./header-decorate-images";




interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn("bg-[url('/assets/header-image/header-cackes.avif')] bg-no-repeat bg-center bg-cover relative overflow-hidden", className)}>
      <HeaderTitle className="mb-44"/>
      <HeaderContent className="mb-10"/>
      <HeaderDecorateImages />
    </header>
  );
}