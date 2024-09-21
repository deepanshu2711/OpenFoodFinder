import { CategoryBadge } from "@/components/category/categoryBadge";
import { FoodCard } from "@/components/FoodCard";

export default function Home() {
  return (
    <div className="px-10 md:flex items-start hidden">
      {/* TODO: Complete filter options like in real-Estate */}
      <div className="w-[20%] bg-gray-100 rounded-xl h-[80vh] fixed p-2 mt-28">
        <p className="text-center text-lg font-semibold text-violet-500">
          Filter Products
        </p>
      </div>

      <div className="flex flex-col w-[80%] ml-[21%]  gap-10 pl-[20px]">
        {/* Categories */}
        <div className="flex items-center px-[10px] fixed mt-28 bg-white w-full pb-4  gap-5">
          <CategoryBadge category="All" />
          <CategoryBadge category="Beverages" />
          <CategoryBadge category="Snacks" />
          <CategoryBadge category="Diary" />
        </div>
        <div className="grid grid-cols-4 gap-5 mt-40">
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
