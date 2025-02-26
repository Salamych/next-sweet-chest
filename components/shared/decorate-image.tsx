import React from "react";
import BerryImage from "../../public/assets/shared-img/berry.png";
import LeafImage from "../../public/assets/shared-img/leaf.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  imageName: "berry" | "leaf";
  className?: string;
}

export const DecorateImage: React.FC<Props> = ({imageName, className}) => {
  if(imageName === "berry") {
    return (
      <Image
        src={BerryImage}
        alt="Berry image"
        className={cn("absolute blur-sm", className)}
      />
    );
  } 
  else {
    return (
      <Image
        src={LeafImage}
        alt="Leaf image"
        className={cn("absolute blur-lg", className)}
      />
    );
  }
}