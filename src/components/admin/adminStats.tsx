export const AdminStats = ({
  dbRows,
  bcRows,
  totalUsers,
  apiUsers,
}: {
  dbRows: number;
  bcRows: number;
  totalUsers: number;
  apiUsers: number;
}) => {
  return (
    <>
      <div className="my-4 text-xl uppercase">database stats</div>
      <div className="bg-whit flex w-full space-x-4">
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{dbRows}</div>
            <div className="mx-4 text-center uppercase">db rows</div>
          </div>
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{bcRows}</div>
            <div className="mx-4 text-center uppercase">bc rows</div>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{totalUsers}</div>
            <div className="mx-4 text-center uppercase">total users</div>
          </div>
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-stone-800 bg-opacity-50 outline outline-2 outline-stone-700 backdrop-blur-md">
            <div className="text-7xl">{apiUsers}</div>
            <div className="mx-4 text-center uppercase">api users</div>
          </div>
        </div>
      </div>
    </>
  );
};