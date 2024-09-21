interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center rounded-lg h-[30px] w-[100px] hover:bg-violet-400 hover:text-white font-semibold border cursor-pointer">
      <p className="">{category}</p>
    </div>
  );
};
