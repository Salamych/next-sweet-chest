import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../container";
import { BageGray } from "../bage-gray";
import { ButtonLink } from "../button-link";

interface Props {
  className?: string;
}

export const HeaderContent: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("pb-[525px]", className)}>
      <Container>
        <div className="max-w-[647px]">
          <BageGray text="вкуснейшие" />

          <p className="text-[48px] text-white font-bold my-6">
            Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
          </p>

          <p className="text-2xl text-white">
            Приготовим за 3 часа в день заказа.
          </p>

          <p className="text-2xl text-white mb-10">
            Доставка на авто в холодильнике.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
            <ButtonLink text="Перейти в каталог" url="#"/>
            <div>

            <p className="text-base text-white">9 различных</p>
            <p className="text-base text-white">видов на выбор</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}