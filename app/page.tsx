
import BestSellingComponent from "@/components/BestSellingComponent";
import CategoriesComponent from "@/components/CategoriesComponent";
import HeaderBanner from "@/components/HeaderBanner";
import NewArrival from "@/components/NewArrival";
import OurProductsComponent from "@/components/OurProductsComponent";
import PoliciesComponent from "@/components/PoliciesComponent";
import SalesComponent from "@/components/SalesComponent";
import SecondBannerComponent from "@/components/SecondBannerComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeaderBanner />
      <SalesComponent />
      <CategoriesComponent />
      <BestSellingComponent />
      <SecondBannerComponent />
      <OurProductsComponent />
      <NewArrival />
      <PoliciesComponent />
    </div>
  );
}
