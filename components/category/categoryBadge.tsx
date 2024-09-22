"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const searchParams = useSearchParams();
  return (
    <Link
      href={`?category=${category}`}
      className={`${searchParams.get("category") === category ? "bg-violet-400 text-white" : "bg-gray-100"} flex items-center justify-center rounded-lg h-[30px] w-[200px] hover:bg-violet-400 hover:text-white font-semibold border cursor-pointer`}
    >
      <p className="">{category}</p>
    </Link>
  );
};
