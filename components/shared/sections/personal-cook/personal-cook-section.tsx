import React from "react";
import { Container } from "../../container";
import { cn } from "@/lib/utils";
import { BageGray } from "../../bage-gray";
import { TitleSection } from "../../title-section";
import { ButtonLink } from "../../button-link";

import PersonalCookImage from "../../../../public/assets/personal-cook-image/personal-cook.png";
import Image from "next/image";
import { DecorateImage } from "../../decorate-image";

interface Props {
  className?: string;
}

const actionsList = [
  {id: 1, text: "Проконсультирую по выбору капкейков и придумаю нестандартную идею"},
  {id: 2, text: "Приготовлю капкейки для вашего события, которые обязательно всем понравятся"},
  {id: 3, text: "Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок"},
]

export const PersonalCookSection: React.FC<Props> = ({className}) => {
  return (
    <section>
      <Container>
        <div
          className={cn(
            "flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center gap-5 lg:gap-2 overflow-hidden",
            className
          )}
        >
          <div className="lg:max-w-[580px]">
            <BageGray text="Кто будет готовить?" className="mb-6" />
            <TitleSection
              text="Лично приготовлю и всё красиво упакую для вашего события"
              className="text-[#28363e] leading-[60px] mb-9"
            />
            <ul className="list-disc p-5">
              {actionsList.map((item) => (
                <li key={item.id} className="text-[#5d6afb] text-2xl mb-7">
                  <span className="text-[#28363e] text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
            <ButtonLink text="Задать вопрос Юлии" url="#" />
          </div>
          <div className="max-w-[580px] relative flex flex-col items-center">
            <DecorateImage
              imageName="berry"
              className="w-[159px] h-[163px] left-0 -rotate-45 top-1/4"
            />
            <DecorateImage
              imageName="leaf"
              className="w-[275px] h-[266px] right-0 top-1/4 rotate-180"
            />
            <DecorateImage
              imageName="leaf"
              className="w-[275px] h-[266px] right-0 top-1/4 rotate-[150deg]"
            />
            <DecorateImage
              imageName="leaf"
              className="w-[275px] h-[266px] right-0 top-1/4 rotate-[120deg]"
            />
            <div className="overflow-hidden rounded-b-full z-10 w-full sm:w-[580px] flex justify-center">
              <Image src={PersonalCookImage} alt="PersonalCookImage" />
            </div>
            <div className="absolute bottom-0 w-full sm:w-[580px] h-[580px] rounded-[50%] bg-[#fed84c]" />
            <div className="absolute flex flex-col items-center bottom-0 sm:top-3/4 z-10 left-0 sm:-left-[5%]">
              <span className="text-2xl text-white font-medium bg-[#2e363e] py-4 px-6 rounded-lg -skew-x-12">
                Юлия Кондратьева
              </span>
              <span className="text-lg text-[#2e363e] uppercase bg-[#f2f6fa] py-4 px-6 rounded-lg -skew-x-12">
                ваш кондитер
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}