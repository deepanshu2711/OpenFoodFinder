"use client";
import { FIlterSection } from "@/components/Filter/filterSection";
import { Products } from "@/components/Products/products";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<"A-Z" | "Z-A">("A-Z");
  console.log("selected FIlter:", selectedFilter);
  const handleChangeFilter = (filter: string) => {
    setSelectedFilter(filter);
  };
  return (
    <div className="md:px-10 px-[20px] flex items-start">
      <FIlterSection
        selectedFilter={selectedFilter}
        setSelectedFilter={handleChangeFilter}
      />
      <div className="flex flex-col md:w-[80%] md:ml-[21%]  gap-10 md:pl-[20px]">
        <Products filter={selectedFilter} />
      </div>
    </div>
  );
}
