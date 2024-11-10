export const LinkSkeleton = () => {
  return (
    <div className="relative mt-3 flex flex-col items-center justify-start gap-y-2 rounded-xl bg-snow px-5 py-10">
      <div className="flex w-full items-center justify-between py-2">
        <div className="h-6 w-16 rounded-xl bg-gray/10" />
        <div className="h-6 w-16 rounded-xl bg-gray/10" />
      </div>

      <div className="flex w-full flex-col items-center gap-3">
        <div className="h-10 w-full rounded-2xl bg-gray/10" />
        <div className="h-10 w-full rounded-2xl bg-gray/10" />
      </div>

      <div className="shimmer absolute left-0 top-0 h-full w-1/5"></div>
    </div>
  );
};
