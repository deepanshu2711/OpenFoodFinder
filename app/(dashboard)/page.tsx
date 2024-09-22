"use client";
import { FIlterSection } from "@/components/Filter/filterSection";
import { Products } from "@/components/Products/products";

export default function Home() {
  return (
    <div className="md:px-10 px-[20px] flex items-start">
      <FIlterSection />
      <div className="flex flex-col md:w-[80%] md:ml-[21%]  gap-10 md:pl-[20px]">
        <Products />
      </div>
    </div>
  );
}
