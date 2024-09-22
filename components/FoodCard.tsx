import Image from "next/image";
import { MdCategory } from "react-icons/md";

interface FoodCardProps {
  name: string;
  category: string;
  imageUrl: string;
  nutritionGrade: string;
}

export const FoodCard = ({
  name,
  category,
  imageUrl,
  nutritionGrade,
}: FoodCardProps) => {
  return (
    <div className="flex flex-col border rounded-lg p-4 cursor-pointer shadow-md">
      <div className="flex items-center justify-between p-2">
        <p className="text-violet-500 font-semibold">{name.slice(0, 25)}</p>
        <div className="flex items-center gap-2">
          <MdCategory className="h-4 w-4" />
          <p className="text-gray-500 text-[14px] font-semibold">
            {category?.split(/[, ]+/)[0].slice(0, 10)}
          </p>
        </div>
      </div>
      <div className="p-[20px]">
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt="KingFisher"
          className="w-full h-[200px] object-fill rounded-lg"
        />
      </div>
      <div className="flex items-center gap-2 p-2">
        <p className="text-gray-500 font-semibold">Nutrition Grade:</p>
        <p className="text-violet-500 font-semibold">{nutritionGrade}</p>
      </div>
    </div>
  );
};
