"use client";

import * as React from "react"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { IReviewCard, ReviewCard } from "./review-card";


import ReviewPerson1 from "../../../../public/assets/review-person/review-person-1.jpeg";


export type CarouselItem = IReviewCard & {
  id: number;
}

const carouselList: CarouselItem[] = [
  {
    id: 1,
    imageUrl: ReviewPerson1,
    imageAlt: "Review Person 1",
    authorName: "Ирина Ларионова",
    authorAddress: "Санкт-Петербург",
    title: "Результат дико порадовал, друзья были в восторге",
    text: "Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!)",
  },
  {
    id: 2,
    imageUrl: ReviewPerson1,
    imageAlt: "Review Person 1",
    authorName: "Инна Ларова",
    authorAddress: "Санкт-Петербург",
    title: "Результат дико порадовал, друзья были в восторге",
    text: "Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!)",
  },
  {
    id: 3,
    imageUrl: ReviewPerson1,
    imageAlt: "Review Person 1",
    authorName: "Ирина Лари",
    authorAddress: "Санкт-Петербург",
    title: "Результат дико порадовал, друзья были в восторге",
    text: "Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!)",
  },
  {
    id: 4,
    imageUrl: ReviewPerson1,
    imageAlt: "Review Person 1",
    authorName: "Ира Ларионова",
    authorAddress: "Санкт-Петербург",
    title: "Результат дико порадовал, друзья были в восторге",
    text: "Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!)",
  },
  
];

export function ReviewsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-7xl">
      <Carousel setApi={setApi} className="max-w-6xl">
        <CarouselContent>
          {carouselList.map((item) => (
            <CarouselItem key={item.id} className="">
              <ReviewCard {...item}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
