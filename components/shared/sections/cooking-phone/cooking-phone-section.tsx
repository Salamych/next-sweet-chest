import React from "react";
import { Container } from "../../container";
import { cn } from "@/lib/utils";
import { BageGray } from "../../bage-gray";
import { TitleSection } from "../../title-section";
import { ButtonLink } from "../../button-link";
import Image from "next/image";

import CookingPhoneImage from "../../../../public/assets/cooking-image/cooking-phone.png";
import CloudTopImage from "../../../../public/assets/shared-img/cloud-top.png";
import CloudBottomImage from "../../../../public/assets/shared-img/cloud-bottom.png";
import { DecorateImage } from "../../decorate-image";

interface Props {
  className?: string;
}

export const CookingPhoneSection: React.FC<Props> = ({className}) => {
  return (
    <section>
      <div
        className={cn("bg-[#081130] relative  overflow-hidden z-0", className)}
      >
        <div className="absolute top-0 left-0 right-0 z-10">
          <Image src={CloudTopImage} alt="Cloud Top Image" className="w-full" />
        </div>

        <Container className="relative z-20">
          <DecorateImage
            imageName="leaf"
            className="w-[110px] h-[114px] rotate-90 top-1/4 left-0 -z-10"
          />
          <DecorateImage
            imageName="berry"
            className="w-[152px] h-[156px] top-[20%] -right-16 -rotate-180"
          />
          <div className="ml-auto 2xl:max-w-[482px] pt-[309px] pb-[459px]">
            <BageGray text="Не нашли то что нужно?" className="mb-6" />
            <TitleSection
              text="Приготовим заказ любой сложности по фото или эскизу"
              className="text-white mb-6 leading-[60px]"
            />
            <p className="text-xl text-white mb-10">
              Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость
              за 30 минут
            </p>
            <ButtonLink text="Загрузить фотографию" url="#"/>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            src={CloudBottomImage}
            alt="Cloud Bottom Image"
            className="w-full"
          />
        </div>
        <div className="absolute bottom-0 left-0  -z-10">
          <Image src={CookingPhoneImage} alt="CookingPhoneImage" />
        </div>
      </div>
    </section>
  );
}