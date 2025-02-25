import React from "react";
import Image from "next/image";

import BerryImage from "../../../public/assets/shared-img/berry.png";
import LeafImage from "../../../public/assets/shared-img/leaf.png";


export const HeaderDecorateImages: React.FC = () => {
  return (
    <>
      <Image
        src={BerryImage}
        alt="Berry image"
        className="absolute w-[195px] h-[201px] top-52 -left-14 -rotate-45 blur-sm"
      />
      <Image
        src={BerryImage}
        alt="Berry image"
        className="absolute w-[195px] h-[201px] top-28 -right-14 rotate-45 blur-sm"
      />
      <Image
        src={LeafImage}
        alt="Leaf image"
        className="absolute w-[275px] h-[286px] bottom-0  -rotate-[160deg] -left-14 blur-lg"
      />
      <Image
        src={BerryImage}
        alt="Berry image"
        className="absolute w-[195px] h-[201px] bottom-52 right-[12vw] rotate-180 blur-sm"
      />
    </>
  );
}