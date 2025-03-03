import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

import QuotesImage from "../../../../public/assets/shared-img/quotes.png";

export interface IReviewCard{
  imageUrl: StaticImageData;
  imageAlt: string;
  authorName: string;
  authorAddress: string;
  title: string;
  text: string; 
}

interface Props extends IReviewCard{
  className?: string;
}

export const ReviewCard: React.FC<Props> = ({imageUrl, imageAlt, authorName, authorAddress, title, text, className}) => {
  return (
    <div
      className={cn(
        "max-w-[1180px] rounded-lg bg-white py-[70px] px-3 flex flex-col md:flex-row gap-5 justify-center items-center",
        className
      )}
    >
      <div className="max-w-[460px] text-[#2e363e]">
        <div className="mb-8">
          <Image src={QuotesImage} alt="Quotes Image" />
        </div>

        <p className="text-[30px] font-medium mb-6">&laquo;{title}&raquo;</p>
        <p className="text-base mb-6">&laquo;{text}</p>
        <p>
          <a href="#" className="text-[14px] text-[#4a94ff]">
            Читать отзыв полностью
          </a>
        </p>
      </div>
      <div className="max-w-[380px] flex-col items-center">
        <div className="overflow-hidden sm:w-[380px] sm:h-[380px] rounded-[50%] mb-8">
          <Image src={imageUrl} alt={imageAlt} />
        </div>
        <div className="text-center">
          <p className="text-[#2e363e] text-[21px] font-medium mb-2">
            {authorName}
          </p>
          <p className="text-base text-[#a6aeb6]">{authorAddress}</p>
        </div>
      </div>
    </div>
  );
}