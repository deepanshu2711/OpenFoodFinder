import Image from "next/image";
import { MdCategory } from "react-icons/md";

export const FoodCard = () => {
  return (
    <div className="flex flex-col border rounded-lg p-4 cursor-pointer shadow-md">
      <div className="flex items-center justify-between p-2">
        <p className="text-violet-500 font-semibold">KingFisher</p>
        <div className="flex items-center gap-2">
          <MdCategory className="h-4 w-4" />
          <p className="text-gray-500 font-semibold">Beverage</p>
        </div>
      </div>
      <div className="p-[20px]">
        <Image
          src="/beverage.jpg"
          width={200}
          height={200}
          alt="KingFisher"
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center gap-2 p-2">
        <p className="text-gray-500 font-semibold">Nutrition Grade:</p>
        <p className="text-violet-500 font-semibold">A</p>
      </div>
    </div>
  );
};
