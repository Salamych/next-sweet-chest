import React from "react";
import { TitleSection } from "../../title-section";
import { cn } from "@/lib/utils";
import { Container } from "../../container";

import {sweetGalleryImages} from "./sweet-gallery-images";
import Image from "next/image";

interface Props {
  className?: string;
}

export const SweetGallerySection: React.FC<Props> = ({className}) => {
  return (
    <section>
      <div className={cn("text-[#2e363e] flex flex-col justify-center items-center gap-20 pt-5 mb-5", className)}>
        <Container className="text-center">
          <TitleSection text="Сделали более 3.000 заказов за 2 года" className="mb-4"/>
          <p className="text-2xl">Посмотрите фото реальных заказов из нашего instagram</p>
        </Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center max-w-[1920px] p-2 overflow-hidden">
        {
          sweetGalleryImages.map((item, index) => (
            <div key={index} className="">
              <Image src={item} alt={`Image-${index}`} />
            </div>
          ))
        }
        </div>
      </div>
    </section>
  );
}