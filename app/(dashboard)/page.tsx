import { CategoryBadge } from "@/components/category/categoryBadge";

export default function Home() {
  return (
    <div className="px-10 flex items-start">
      {/* TODO: Complete filter options like in real-Estate */}
      <div className="w-[15%]  h-full"></div>

      <div className="flex flex-col  gap-10">
        {/* Categories */}
        <div className="flex items-center  gap-5">
          <CategoryBadge category="All" />
          <CategoryBadge category="Beverages" />
          <CategoryBadge category="Snacks" />
          <CategoryBadge category="Diary" />
          <CategoryBadge category="Diary" />
          <CategoryBadge category="Diary" />
          <CategoryBadge category="Diary" />
          <CategoryBadge category="Diary" />
        </div>
      </div>
    </div>
  );
}
