import React from "react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import Link from "next/link";

import CloudTopImage from "../../../public/assets/shared-img/cloud-top.png";
import Image from "next/image";
import { FooterForm } from "./footer-form";
import { DecorateImage } from "../decorate-image";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({className}) => {
  return (
    <footer className={cn("bg-[#081130] pt-[310px] relative overflow-hidden", className)}>
      <div className="absolute top-0 left-0 right-0 z-10">
        <Image src={CloudTopImage} alt="Cloud Top Image" className="w-full" />
      </div>
      <Container>
        <div className="py-20 text-center ">
          <div className="py-[70px] px-3 bg-white text-[#2e363e] mb-20 rounded-lg relative">
          <DecorateImage imageName="leaf" className="w-[107px] h-[112px] -top-[20%] -left-16 rotate-90" />
          <DecorateImage imageName="berry" className="w-[152px] h-[156px] -top-[20%] -right-[10%]" />
            <h3 className="text-4xl font-bold mb-3">
              Чтобы сделать заказ, укажите ваш телефон
            </h3>
            <p className="text-[21px] mb-9">
              Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания
            </p>
            <div className="max-w-[880px] mx-auto">
              <FooterForm />
            </div>
            <DecorateImage imageName="berry" className="w-[167px] h-[171px] -bottom-[25%] -left-[13%] rotate-180"/>
            <DecorateImage imageName="leaf" className="w-[147px] h-[153px] -bottom-[25%] -right-[10%] rotate-90"/>  
          </div>
          <div className="text-xs text-[#7e868e] max-w-[605px] text-center mx-auto">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5">
              <p>
                <Link href="#">Согласие на обработку данных</Link>
              </p>
              <p>
                <Link href="#">Служба поддержки</Link>
              </p>
              <p>
                <Link href="#">Политика конфиденциальности</Link>
              </p>
            </div>
            <p>
              &copy; nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН
              0000000000000
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}