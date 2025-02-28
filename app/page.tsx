import { CookingPhoneSection, PersonalCookSection, ProductItemsList } from "@/components/shared/sections";


export default function Home() {
  return (
   <main>
    <ProductItemsList className="mt-5 mb-10 " />
    <CookingPhoneSection className="mb-4" />
    <PersonalCookSection className="mb-4" />
   </main>
  );
}
