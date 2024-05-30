import { ImSpinner } from 'react-icons/im';
const Processing = ({ message }: { message: string }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg  bg-yellow-100 px-5 py-5 text-sm text-slate-500">
      <div className="flex w-full gap-2 text-yellow-700">
        <ImSpinner className="spinner text-3xl" />
        <p className="font-bold ">{message}</p>
      </div>
    </div>
  );
};

export default Processing;
