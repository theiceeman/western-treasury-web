import { ImCancelCircle } from 'react-icons/im';

const Failed = ({ message }: { message: string }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg  bg-red-100 px-5 py-5 text-sm text-slate-500">
      <div className="flex w-full gap-2">
        <ImCancelCircle className="text-3xl text-red-700" />
        <p className="font-bold text-red-700 my-auto">{message}</p>
      </div>
    </div>
  );
};

export default Failed;
