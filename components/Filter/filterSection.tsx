"use client";
import { Category } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface FIlterSectionProps {
  selectedFilter: "A-Z" | "Z-A";
  setSelectedFilter: (filter: "A-Z" | "Z-A") => void;
}

export const FIlterSection = ({
  selectedFilter,
  setSelectedFilter,
}: FIlterSectionProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responce = await axios.get(
          "https://world.openfoodfacts.org/categories.json",
        );
        if (responce.data.tags) {
          setCategories(responce.data.tags);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  console.log(selectedCategory);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    router.push(`/?category=${categoryName}`);
  };

  return (
    <div className="w-[20%] md:flex hidden bg-gray-100 rounded-xl h-[80vh] fixed p-4 mt-32 flex-col gap-5">
      <p className="text-center text-[20px]  text-gray-700">Filter Products</p>
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex-col flex gap-4">
          <div className="md:flex hidden items-center bg-white px-2  rounded-lg group">
            <input
              className="flex-1 p-2 bg-transparent focus-within:outline-none"
              placeholder="Search by barcode"
            />
            <FiSearch className="h-6 w-6 group-hover:text-violet-500" />
          </div>
          <button className="bg-violet-500 text-white p-2 rounded-lg uppercase">
            Search
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-[14px]">Category:</p>
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="p-2 w-full rounded-lg"
            value={selectedCategory}
          >
            <option value={"All"}>All</option>
            {categories &&
              categories.length > 0 &&
              categories.map((category, idx) => (
                <option key={idx} value={category?.name}>
                  {category?.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-[14px]">Sort:</p>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value as "A-Z" | "Z-A")}
            className="p-2 w-full rounded-lg"
          >
            <option value={"A-Z"}>A-Z (Product Name)</option>
            <option value={"Z-A"}>Z-A (Product Name)</option>
            <option>Nutrition grade (A-D)</option>
            <option>Nutrition grade (D-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
