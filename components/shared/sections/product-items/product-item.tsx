import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

import CreamCastleImage from "../../../../public/assets/product-images/cream-castle.webp";
import { ButtonLink } from "../../button-link";

export interface ICardItem {
  imageUrl: StaticImageData;
  imageAlt: string;
  cardName: string;
  cardDescription: string;
  cardPrice: number;
}

interface Props extends ICardItem{
  className?: string;
}

export const ProductItem: React.FC<Props> = ({imageUrl, imageAlt, cardName, cardDescription, cardPrice, className}) => {
  return (
    <div
      className={cn(
        "max-w-[600px] md:max-w-[340px] lg:max-w-[calc(4/12*100%-20px)] rounded-t-[10px] overflow-hidden border border-[#f2f6fa]",
        className
      )}
    >
      <div>
        <Image src={imageUrl} alt={imageAlt} />
      </div>
      <div className="px-8 py-10">
        <h3 className="text-2xl text-[#2e363e] font-bold mb-3">{cardName}</h3>
        <p className="text-base text-[#2e363e] mb-6">{cardDescription}</p>
        <p className="text-2xl text-[#434b53] font-medium mb-4">{cardPrice} ₽/шт.</p>
        <ButtonLink text="Заказать" url="#" isProductItem={true} />
      </div>
    </div>
  );
}