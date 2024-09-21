export const TopHeader = () => {
  return (
    <div className="flex items-center justify-between md:px-10 px-[20px] bg-violet-500 py-2 fixed w-full">
      <div>
        <p className="text-white font-medium text-[14px] cursor-pointer ">
          By Deepanhu
        </p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-white font-medium text-[14px] cursor-pointer ">
          Github
        </p>
        <p className="text-white font-medium text-[14px] cursor-pointer ">
          Portfolio
        </p>
      </div>
    </div>
  );
};
