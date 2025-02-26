import React from "react";

import { DecorateImage } from "../decorate-image";


export const HeaderDecorateImages: React.FC = () => {
  return (
    <>
      <DecorateImage
        imageName="berry"
        className="w-[195px] h-[201px] top-52 -left-14 -rotate-45"
      />
      <DecorateImage
        imageName="berry"
        className="w-[195px] h-[201px] top-28 -right-14 rotate-45"
      />
      <DecorateImage
        imageName="leaf"
        className="w-[275px] h-[286px] bottom-0  -rotate-[160deg] -left-14"
      />
      <DecorateImage
        imageName="berry"
        className="w-[195px] h-[201px] bottom-52 right-[12vw] rotate-180"
      />
    </>
  );
}