const Failed = ({message}:{message:string}) => {
    return ( 
        <div className="flex w-full flex-col gap-4 rounded-lg  bg-red-100 px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full gap-2">
                  <img
                    src={'/icons/status/success.svg'}
                    className="cursor-pointer"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  <p className="font-bold text-red-700">{message}</p>
                </div>
              </div>
     );
}
 
export default Failed;