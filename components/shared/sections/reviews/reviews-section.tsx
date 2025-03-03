import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../../container";
import { TitleSection } from "../../title-section";
import { ReviewCard } from "./review-card";
import Image from "next/image";

import CloudTopImage from "../../../../public/assets/shared-img/cloud-top.png";
import CloudBottomImage from "../../../../public/assets/shared-img/cloud-bottom.png";
import { DecorateImage } from "../../decorate-image";
import { ReviewsCarousel } from "./reviews-carousel";

interface Props {
  className?: string;
}

export const ReviewsSection: React.FC<Props> = ({className}) => {
  return (
    <section>
      <div className={cn("bg-[#081130] py-[306px] relative", className)}>
        <div className="absolute top-0 w-full">
          <Image src={CloudTopImage} alt="Cloud Top Image" className="w-full"/>
        </div>
        <Container className="relative">
        <DecorateImage imageName="leaf" className="w-[126px] h-[131px] -rotate-90 -left-2" />
        <DecorateImage imageName="berry" className="w-[152px] h-[156px] -rotate-180 right-0 top-8" />
          <div className="mb-20 text-center">
            <TitleSection
              text="Почитайте отзывы довольных клиентов"
              className="text-white"
            />
          </div>
          
        </Container>
        <ReviewsCarousel />
        <div className="absolute bottom-0 w-full">
          <Image src={CloudBottomImage} alt="Cloud Bottom Image" className="w-full"/>
        </div>
      </div>
    </section>
  );
}