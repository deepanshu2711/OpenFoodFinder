"use client";
import { FIlterSection } from "@/components/Filter/filterSection";
import { FoodCard } from "@/components/FoodCard";

export default function Home() {
  return (
    <div className="px-10 md:flex items-start hidden">
      <FIlterSection />
      <div className="flex flex-col w-[80%] ml-[21%]  gap-10 pl-[20px]">
        <div className="grid grid-cols-4 gap-5 mt-32">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    </div>
  );
}
