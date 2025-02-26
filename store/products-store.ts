import { ICardItem } from "@/components/shared/sections/product-items/product-item";
import CreamCastleImage from "../public/assets/product-images/cream-castle.webp";
import RaspberryParadiseImage from "../public/assets/product-images/raspberry-paradise.webp";
import FireworksImage from "../public/assets/product-images/fireworks.webp";
import ChocolateWorldImage from "../public/assets/product-images/chocolate-world.webp";
import DragonTearsImage from "../public/assets/product-images/dragon-tears.webp";
import SummerFantasyImage from "../public/assets/product-images/summer-fantasy.webp";
import CapeOfMadnessImage from "../public/assets/product-images/cape-of-madness.webp";
import CloudTaleImage from "../public/assets/product-images/cloud-tale.webp";
import DarkKnightImage from "../public/assets/product-images/dark-knight.webp";

interface IProductItem extends ICardItem{
  id: number;
}
export const productCardList: IProductItem[] = [
  {
    id: 1, 
    imageUrl: CreamCastleImage, 
    imageAlt: "Cream Castle Image", 
    cardName: "Кремовый замок", 
    cardDescription: "Нежный крем любого цвета на выбор, вафельная основа", 
    cardPrice: 150
  },
  {
    id: 2, 
    imageUrl: RaspberryParadiseImage, 
    imageAlt: "Cream Castle Image", 
    cardName: "Малиновый рай", 
    cardDescription: "Воздушный крем, темная основа и ягода малины", 
    cardPrice: 150
  },
  {
    id: 3, 
    imageUrl: FireworksImage, 
    imageAlt: "Fireworks Image", 
    cardName: "Фейерверк", 
    cardDescription: "Разноцветные крем, с бисквитной основой", 
    cardPrice: 150
  },
  {
    id: 4, 
    imageUrl: ChocolateWorldImage, 
    imageAlt: "Chocolate World Image", 
    cardName: "Шоколадный мир", 
    cardDescription: "Ореховая стружка, нежный крем и шоколадная основа", 
    cardPrice: 150
  },
  {
    id: 5, 
    imageUrl: DragonTearsImage, 
    imageAlt: "Dragon Tears Image", 
    cardName: "Слезы дракона", 
    cardDescription: "Нежный крем любого цвета на выбор, вафельная основа", 
    cardPrice: 150
  },
  {
    id: 6, 
    imageUrl: SummerFantasyImage, 
    imageAlt: "Summer Fantasy Image", 
    cardName: "Летняя фантазия", 
    cardDescription: "Украшения в форме сердец, для любимого человека", 
    cardPrice: 150
  },
  {
    id: 7, 
    imageUrl: CapeOfMadnessImage, 
    imageAlt: "Cape Of Madness Image", 
    cardName: "Мыс безумия", 
    cardDescription: "Разноцветная основа, стружка и нежный крем", 
    cardPrice: 150
  },
  {
    id: 8, 
    imageUrl: CloudTaleImage, 
    imageAlt: "Cloud Tale Image", 
    cardName: "Облачная сказка", 
    cardDescription: "Светлая основа, нежный крем со стружкой сверху", 
    cardPrice: 150
  },
  {
    id: 9, 
    imageUrl: DarkKnightImage, 
    imageAlt: "Dark Knight Image", 
    cardName: "Темный рыцарь", 
    cardDescription: "Тёмная основа, нежный крем и вкусные шарики", 
    cardPrice: 150
  },
]