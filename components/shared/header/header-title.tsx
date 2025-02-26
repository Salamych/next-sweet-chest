import React from "react";
import { Container } from "../container";
import { cn } from "@/lib/utils";

import PlacesImage from "../../../public/assets/header-image/places-map.png";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

interface Props {
  className?: string;
}

export const HeaderTitle: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("py-11 border-b-2 border-[rgba(126,134,142,.2)]", className)}>
      <Container>
        <div className="text-white flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center">
          <div className="text-xl font-medium">Сладкий сундук</div>
          <div className="flex flex-col sm:flex-row gap-5 md:gap-14">
            <div >
              <div className="flex items-center gap-3 text-xs">
                <Image
                  src={PlacesImage}
                  alt="Places image"
                  height={17}
                  width={12}
                />
                <p>г. Санкт Петербург,</p>
              </div>
                <p className="text-xs pl-6">ул. Куйбышева 31</p>
            </div>
            <div className="">
              <div className="flex items-center gap-3">
                <PhoneCall className="fill-white h-[19px] w-[19px]" />
                <p className="text-xl font-bold">
                  <Link href="tel:88128449549">8 (812) 844-95-49</Link>
                </p>
              </div>
              <p className="pl-8 text-xs">Ежедневно с 9:00 до 20:00</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}