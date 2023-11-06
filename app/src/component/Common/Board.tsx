export const Board = ({ children, margin, padding, bgColor }: any) => {
  return (
    <>
      <div
        className={`bg-${bgColor} rounded-lg m-${margin} shadow-lg p-${padding}`}
      >
        {children}
      </div>
    </>
  );
};
