export const CategoryBoard = ({ children, bgColor,title }: any) => {
  return (
    <>
      <div className={`bg-${bgColor} p-8 shadow-lg rounded-lg mx-1`}>
        <h1 className=" text-center p-2 font-bold text-2xl text-white ">
          {title}
        </h1>
        <hr/>
        {children}
      </div>
    </>
  );
};
