import { useAppSelector } from '@/src/stores/hooks';
import { getFirstLetters } from '@/src/utils/helper';

const TopBar = () => {
  const user = useAppSelector(state => state.user);
  console.log({ user });

  return (
    <div className=" text-md flex w-full   bg-white px-5 py-5 font-bold">
      <div className="flex w-full justify-end gap-3 lg:w-[85%]">
        <div className="my-auto capitalize">Hello{user?.first_name && ', ' + user?.first_name}</div>
        <div className="my-auto mb-auto flex rounded-full bg-violet-100 px-3 py-3 text-xs font-bold text-violet-500 md:my-auto uppercase">
          {getFirstLetters(user?.first_name ?? user?.email, user?.last_name ?? user?.email)}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
