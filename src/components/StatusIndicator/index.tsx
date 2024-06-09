import React from 'react';

function StatusIndicator({ type }: { type: string | boolean }) {
  console.log(type?.toString()?.trim()?.toLowerCase());
  switch (type?.toString()?.trim()?.toLowerCase()) {
    case 'transaction_created':
      return (
        <div className="flex  rounded-sm  bg-yellow-100 px-3 py-1 justify-center text-center text-xs text-yellow-700 hover:bg-yellow-200">
          {type}
        </div>
      );

    case 'transfer_confirmed':
      return (
        <div className=" flex rounded-sm  bg-blue-100 px-3 py-1 text-center justify-center text-xs text-primary hover:bg-blue-200">
          {type}
        </div>
      );

    case 'processing':
      return (
        <div className="flex rounded-sm  bg-yellow-100 px-3 py-1 text-center justify-center text-xs text-yellow-700 hover:bg-yellow-200">
          {type}
        </div>
      );

    case 'completed':
      return (
        <div className="flex  rounded-sm  bg-green-100 px-3 py-1 text-center justify-center text-xs text-green-700 hover:bg-green-200">
          {type}
        </div>
      );

    case 'failed':
      return (
        <div className="text-danger flex rounded-sm  bg-red-100 px-3 py-1 justify-center text-center text-xs text-red-700 hover:bg-red-200">
          {type}
        </div>
      );

    default:
      return (
        <div className="flex  rounded-sm bg-blue-100 px-3 py-1 text-xs justify-center text-primary hover:bg-blue-200">
          {type}
        </div>
      );
  }
}

export default StatusIndicator;
