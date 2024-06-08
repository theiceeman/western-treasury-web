import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SettingsNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-5 rounded-md bg-white py-3 md:px-8">
      <div className="mx-3 my-3 flex gap-3 rounded-md bg-[#F0F0F2] px-3 py-2 capitalize">
        <Link
          className={`${pathname === '/app/settings/user' ? 'bg-white font-black' : 'hover:bg-slate-50'} flex w-full cursor-pointer justify-center rounded-md px-4 py-3 text-center text-sm  `}
          href="/app/settings/user"
        >
          User Profile
        </Link>
        <Link
          href="/app/settings/bank"
          className={`${pathname === '/app/settings/bank' ? 'bg-white font-black' : 'hover:bg-slate-50'} flex w-full cursor-pointer justify-center  rounded-md px-4 py-3 text-center text-sm`}
        >
          Fiat Account
        </Link>
        {/* <Link
          href="/app/settings/account"
          className={`${pathname === '/app/settings/account' ? 'bg-white font-black' : 'hover:bg-slate-50'} flex w-full cursor-pointer justify-center  rounded-md px-4 py-3 text-center text-sm`}
        >
          Account
        </Link> */}
      </div>
    </div>
  );
};

export default SettingsNavbar;
