import React from 'react';
import Skeleton from '../Skeleton';

const SkeletonCurrencyCard = () => {
  return (
    <div className="flex min-w-[260px] flex-grow flex-col gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
      <div className="flex w-1/5 ">
        <Skeleton className="h-4 w-full rounded-full" />
      </div>
      <div className="flex w-full">
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
};

export default SkeletonCurrencyCard;
