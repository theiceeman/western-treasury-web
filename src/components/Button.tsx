const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="gap-5 rounded-[10px] bg-primary px-[35px] text-nowrap py-3 text-[16px]/[20px] text-white capitalize">
      {children}
    </button>
  );
};

export default Button;
