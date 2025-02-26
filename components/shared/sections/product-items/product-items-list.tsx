import React from "react";
import { Container } from "../../container";
import { TitleSection } from "../../title-section";
import { ProductItem } from "./product-item";
import { productCardList } from "@/store/products-store";
import { DecorateImage } from "../../decorate-image";
import { cn } from "@/lib/utils";


interface Props {
  className?: string;
}

export const ProductItemsList: React.FC<Props> = ({className}) => {
  return (
    <section className={cn("overflow-hidden", className)}>
      <Container>
        <TitleSection
          text="Для любых событий и дорогих вам людей"
          className="text-[#2e363e] mb-20"
        />
        <div className="flex flex-col items-center md:flex-wrap md:flex-row md:justify-between gap-5 relative">
          {productCardList.map((item) => (
            <ProductItem key={item.id} {...item}/>
          ))}
          <DecorateImage imageName="berry" className="w-[170px] h-[174px] top-24 -left-32 -rotate-45"/>
          <DecorateImage imageName="leaf" className="w-[161px] h-[167px] top-1/2 -right-32 rotate-180"/>
          <DecorateImage imageName="leaf" className="w-[109px] h-[113px] top-3/4 -left-28 -rotate-90"/>
        </div>
      </Container>
    </section>
  );
}